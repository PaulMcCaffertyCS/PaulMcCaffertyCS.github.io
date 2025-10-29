import "./Contact.css";
import ContactForm from "./ContactForm";

const ContactUI = () => {
    return (
        <div className="page-container">
            <div className="page-title-container">
                <h1 id="page-title" className="page-title gradient-text">Contact</h1>
                <p className="page-title-intro">
                    {`Thank you for visiting my site!\n
                    Please send me a message below to contact me.\n
                    If you prefer direct email, you can reach me at `}
                    <span className="email">paul.m.mccafferty@gmail.com</span>
                </p>
            </div>
            <div className="page-body">
                <ContactForm />
            </div>
        </div>
    );
};

export default ContactUI;