import "./style.css";

export default function Content(content) {
    console.log("Content", content);
  return <div className="content">{content.content}</div>;
}
