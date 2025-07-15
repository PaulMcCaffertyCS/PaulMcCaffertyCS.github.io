import React, { useEffect, useRef } from "react";
import Point from "../utils/javascript/Point";
import { updatePosition } from "../utils/html/ElementUtils";
import "./BoopButton.css";

const BoopButton: React.FC = () => {
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const button = buttonRef.current;
        if (!button) return;

        const handleMouseMove = (event: MouseEvent) => {
            const mouseLocation = new Point(event.clientX, event.clientY);
            const rect = button.getBoundingClientRect();
            const buttonCenter = new Point(
                rect.left + rect.width / 2,
                rect.top + rect.height / 2
            );

            const dx = buttonCenter.x - mouseLocation.x;
            const dy = buttonCenter.y - mouseLocation.y;
            const distance = Math.sqrt(dx ** 2 + dy ** 2);

            const threshold = 150;
            if (distance < threshold) {
                const scale = 200;
                const moveX = (dx / distance) * scale;
                const moveY = (dy / distance) * scale;

                const maxX = window.innerWidth - button.offsetWidth;
                const maxY = window.innerHeight - button.offsetHeight;

                const newLeft = Math.min(
                    Math.max(0, button.offsetLeft + moveX),
                    maxX
                );
                const newTop = Math.min(
                    Math.max(0, button.offsetTop + moveY),
                    maxY
                );

                updatePosition(button, new Point(newLeft, newTop));
            }
        };

        document.addEventListener("mousemove", handleMouseMove);
        return () => { document.removeEventListener("mousemove", handleMouseMove); }
    }, []);

    return (
        <button ref={buttonRef} id="boop">
            Boop
        </button>
    );
};

export default BoopButton;
