import { FC } from "react";
import { annotationToClassName } from "../utils";
import { Context } from "../utils";
import { useContext } from "react";
import { CodeProps, RichTextType } from "../types";
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

/**
 *
 * @param richTextArr - array of rich_text objects
 * @returns joined text
 */
export const getJoinedRichText = (richTextArr: RichTextType[]): string => {
  const textArr = richTextArr.map(
    (richText: any) => richText.plain_text
    // richText.text.content
  );
  return textArr.join("");
};
