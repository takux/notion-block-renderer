import { FC } from "react";
import { annotationToClassName } from "../utils";
import { Context } from "../utils";
import { useContext } from "react";
import { CodeProps } from "../types";

const CodeRenderer: FC<CodeProps> = ({ lang, richTextArr }) => {
  const { prefix } = useContext(Context);
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
