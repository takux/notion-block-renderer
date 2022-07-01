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

  if (isCodeHighlighter) {
    console.log(44445555, isCodeHighlighter);
    return (
      <div className={`language-${lang}`}>
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

  return (
    <pre>
      <code className={`language-${lang}`}>
        {richTextArr.map((richText: any, index: number) => {
          const className = annotationToClassName(richText.annotations, prefix);
          return (
            <span key={index} className={className}>
              {richText.text.content}
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
    (richText: any, index: number) => richText.text.content
  );
  return textArr.join("");
};
