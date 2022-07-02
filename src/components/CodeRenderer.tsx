import { FC } from "react";
import { annotationToClassName } from "../utils";
import { Context } from "../utils";
import { useContext } from "react";
import { CodeProps, RichTextType } from "../types";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  monokaiSublime,
  irBlack,
  tomorrowNightBright,
  monokai,
} from "react-syntax-highlighter/dist/cjs/styles/hljs";

const CodeRenderer: FC<CodeProps> = ({ lang, richTextArr }) => {
  const { prefix, isCodeHighlighter } = useContext(Context);

  if (!isCodeHighlighter) {
    console.log(8888, isCodeHighlighter);
    return (
      <div className={`language-${lang} syntax-highlighter`}>
        <SyntaxHighlighter
          language={lang}
          style={tomorrowNightBright}
          className="rounded-lg"
          customStyle={{ padding: "1rem" }}
          // showLineNumbers={true}
        >
          {getJoinedText(richTextArr)}
        </SyntaxHighlighter>
      </div>
    );
  }
  console.log(2222, isCodeHighlighter);
  return (
    <div className={`language-${lang} syntax-highlighter`}>
      <SyntaxHighlighter
        language={lang}
        style={tomorrowNightBright}
        className="rounded-lg"
        customStyle={{ padding: "1rem" }}
        // showLineNumbers={true}
      >
        {getJoinedText(richTextArr)}
      </SyntaxHighlighter>
    </div>
  );

  return (
    <pre>
      <code className={`language-${lang}`}>
        {richTextArr.map((richText: any, index: number) => {
          const className = annotationToClassName(richText.annotations, prefix);
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
};

export default CodeRenderer;

/**
 *
 * @param richTextArr
 * @returns
 */
const getJoinedText = (richTextArr: RichTextType[]): string => {
  const textArr = richTextArr.map(
    (richText: any, index: number) => richText.plain_text
    // richText.text.content
  );
  return textArr.join("");
};
