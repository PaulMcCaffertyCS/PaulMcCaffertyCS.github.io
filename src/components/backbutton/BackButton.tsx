import React from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import "./BackButton.css";

const BackButton: React.FC = () => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate(-1);
    }

    return (
        <div className="back-arrow-container" onClick={onClick}>
            <IoArrowBack className="back-arrow-icon" />
        </div>
    );
}

export default BackButton;