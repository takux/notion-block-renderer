import { FC } from "react";
import { annotationToClassName } from "../utils";
import { Prefix } from "./NotionBlock";
import { useContext } from "react";

type CodeProps = {
  lang: string;
  richTextArr: any;
};
const CodeRenderer: FC<CodeProps> = ({ lang, richTextArr }) => {
  const prefix = useContext(Prefix);
  return (
    <pre>
      <code className={`language-${lang}`}>
        {richTextArr.map((richText: any) => {
          const className = annotationToClassName(richText.annotations, prefix);
          return <span className={className}>{richText.text.content}</span>;
        })}
      </code>
    </pre>
  );
};
export default CodeRenderer;
