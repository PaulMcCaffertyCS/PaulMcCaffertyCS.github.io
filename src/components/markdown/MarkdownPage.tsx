import ReactMarkdown from "react-markdown";
import policyMarkdownContent from "../../pages/projects/onething/policy.md?raw";
import termsMarkdownContent from "../../pages/projects/onething/terms.md?raw";

type MarkdownPageProps = {
    markdown: "policy" | "terms";
}

const MarkdownPage = ({ markdown }: MarkdownPageProps) => {
    let markdownContent: string;
    switch (markdown) {
        case "policy": markdownContent = policyMarkdownContent; break;
        case "terms": markdownContent = termsMarkdownContent; break;
    }

    return (
        <div className="markdown-body">
            <ReactMarkdown>{markdownContent}</ReactMarkdown>
        </div>
    );
};

export default MarkdownPage;