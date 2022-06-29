import { FC } from "react";
import { annotationToClassName } from "../utils";
import { Context } from "./NotionBlock";
import { useContext } from "react";

type CodeProps = {
  lang: string;
  richTextArr: any;
};

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
