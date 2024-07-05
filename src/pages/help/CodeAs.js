import SyntaxHighlighter from "react-syntax-highlighter";

export default function CodeAs(props) {
  return (
    <>
      <h5>Code as Javascript</h5>
      <SyntaxHighlighter
        language={props.language}
        wrapLines={true}
        style={props.codeStyle}
      >
        {props.code}
      </SyntaxHighlighter>
    </>
  );
}
