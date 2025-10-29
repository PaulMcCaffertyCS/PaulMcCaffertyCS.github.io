import { useEffect, useRef } from "react";
import type { FootnoteVideoProps } from "./FootnoteVideoProps";
import "./FootnoteVideo.css";

const FootnoteVideo: React.FC<FootnoteVideoProps> = ({ className, video, videoType, videoWidth, videoHeight, footnote, footnoteSize }) => {
    const videoRef = useRef<HTMLImageElement | null>(null);
    const footnoteRef = useRef<HTMLParagraphElement | null>(null);

    useEffect(() => {
        if (videoWidth != null) {
            const vid = videoRef.current;
            if (vid) {
                vid.style.width = `${videoWidth}px`;
            }
        }

        if (videoHeight != null) {
            const vid = videoRef.current;
            if (vid) {
                vid.style.height = `${videoHeight}px`;
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
        <div className={`${className} footnote-video-container`}>
            <video className="footnote-video-video"
                id="footnote-video-vid"
                controls>
                <source src={video} type={videoType} />
            </video>
            <p className="footnote-video-footnote"
                id="footnote-video-p"
                ref={footnoteRef}>
                {footnote}
            </p>
        </div>
    )
}

export default FootnoteVideo;