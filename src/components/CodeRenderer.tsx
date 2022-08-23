import { FC } from "react";
import { annotationToClassName, getJoinedRichText } from "../utils";
import { Context } from "../utils";
import { useContext } from "react";
import { CodeProps } from "../types/props";
import SyntaxHighlighter from "react-syntax-highlighter";

/**
 * Convert the code language notation of the Notion api to the code language notation of react-syntax-highlighter.
 * https://developers.notion.com/reference/block#code-blocks
 * https://react-syntax-highlighter.github.io/react-syntax-highlighter/demo/
 */
const formatCodeLang = (lang: string) => {
  switch (lang) {
    case "plain text":
      return "plaintext";
    case "objective-c":
      return "objectivec";
    default:
      return lang;
  }
};

const CodeRenderer: FC<CodeProps> = ({ lang, richTextArr }) => {
  const { prefix, isCodeHighlighter, syntaxHighlighterCSS } =
    useContext(Context);
  if (isCodeHighlighter) {
    return (
      <div className={`language-${formatCodeLang(lang)} syntax-highlighter`}>
        <SyntaxHighlighter
          language={formatCodeLang(lang)}
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
