import { FC } from "react";
import { annotationToClassName, getJoinedRichText } from "../utils";
import { Context } from "../utils";
import { useContext } from "react";
import { CodeProps } from "../types";
import SyntaxHighlighter from "react-syntax-highlighter";

const CodeRenderer: FC<CodeProps> = ({ lang, richTextArr }) => {
  const { prefix, isCodeHighlighter, syntaxHighlighterCSS } =
    useContext(Context);
  if (isCodeHighlighter) {
    return (
      <div className={`language-${lang} syntax-highlighter`}>
        <SyntaxHighlighter
          language={lang}
          style={syntaxHighlighterCSS}
          className="syntax-highlighter-pre"
          // customStyle={{ padding: "1rem" }}
          // showLineNumbers={true}
        >
          {getJoinedRichText(richTextArr)}
        </SyntaxHighlighter>
      </div>
    );
  } else {
    return (
      <pre>
        <code className={`language-${lang}`}>
          {richTextArr.map((richText: any, index: number) => {
            const className = annotationToClassName(
              richText.annotations,
              prefix
            );
            return (
              <span key={index} className={className}>
                {/* {richText.text.content} */}
                {richText.plain_text}
              </span>
            );
          })}
        </code>
      </pre>
    );
  }
};

export default CodeRenderer;
