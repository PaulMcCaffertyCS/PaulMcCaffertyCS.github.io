import type { ChangeEvent, FormEvent } from "react";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";
import type { ContactFormProps } from "../viewmodel/ContactFormProps";

const EMAILJS_SERVICE_ID = "emailjs_gmail-service";
const EMAILJS_TEMPLATE_ID = "emailjs_template-service";
const EMAILJS_PUBLIC_KEY = "g1DDWBe_44hBRZsb8";

const ContactForm: React.FC = () => {
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [formData, setFormData] = useState<ContactFormProps>({
        name: ``,
        email: ``,
        subject: ``,
        message: ``
    });
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        }
    }, []);

    const handleChange = (changeEvent: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [changeEvent.target.name]: changeEvent.target.value });
    };

    const handleSubmit = async (formEvent: FormEvent) => {
        formEvent.preventDefault();
        setStatus("sending");

        const timestamp = new Date().toLocaleString(
            "en-US",
            {
                timeZone: "America/New_York",
                weekday: "short",
                month: "short",
                day: "numeric",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit"
            }
        )

        const emailData = {
            ...formData,
            time: timestamp
        };

        try {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }

            await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, emailData, EMAILJS_PUBLIC_KEY);
            setStatus("success");
            setFormData({ name: "", email: "", subject: "", message: "" });
        } catch (error) {
            console.error("Email failed:", error);
            setStatus("error");
        } finally {
            timeoutRef.current = setTimeout(() => {
                setStatus("idle")
            }, 20000);
        }
    }

    const displayMessage = () => {
        if (status === "success") {
            return (<p>Message sent!</p>);
        } else if (status === "error") {
            return (<p>Message failure. Please try again. Sorry for the inconvenience.</p>);
        }
    }

    return (
        <form className="form-field"
            onSubmit={handleSubmit}
        >
            <input className="input-field name-input-field gradient-background"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
            />
            <input className="input-field email-input-field"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
            />
            <input className="input-field subject-input-field"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
            />
            <textarea className="textarea-field message-textarea-field"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                required>
            </textarea>
            <button className="submit-button"
                type="submit"
                disabled={status !== "idle"}
            >
                {status === "sending" ? "Sending..." : "Send Message"}
            </button>
            {displayMessage()}
        </form>
    )
}

export default ContactForm;