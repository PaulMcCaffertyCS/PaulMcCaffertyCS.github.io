import { useEffect, useRef } from "react";
import type { FootnoteImageProps } from "./FootnoteImageProps";
import "./FootnoteImage.css";

const FootnoteImage: React.FC<FootnoteImageProps> = ({ className, image, imageWidth, imageHeight, footnote, footnoteSize }) => {
    const imageRef = useRef<HTMLImageElement | null>(null);
    const footnoteRef = useRef<HTMLParagraphElement | null>(null);

    useEffect(() => {
        if (imageWidth != null) {
            const img = imageRef.current;
            if (img) {
                img.style.width = `${imageWidth}px`;
            }
        }

        if (imageHeight != null) {
            const img = imageRef.current;
            if (img) {
                img.style.height = `${imageHeight}px`;
            }
        }

        if (footnoteSize != null) {
            const p = footnoteRef.current;
            if (p) {
                p.style.fontSize = `${footnoteSize}px`;
            }
        }
    }, [])

    return (
        <div className={`${className} footnote-image-container`}>
            <img className="footnote-image-image"
                id="footnote-image-img"
                ref={imageRef}
                src={image}/>
            <p className="footnote-image-footnote"
                id="footnote-image-p"
                ref={footnoteRef}>
                {footnote}
            </p>
        </div>
    )
}

export default FootnoteImage;