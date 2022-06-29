import { FC } from "react";
import Link from "next/link";
import { annotationToClassName } from "../utils";
import { Prefix } from "./NotionBlock";
import { useContext } from "react";
type TextProps = {
  richTextArr: any;
  isNextLink?: boolean;
};

const TextRenderer: FC<TextProps> = ({ richTextArr, isNextLink = true }) => {
  const prefix = useContext(Prefix);
  return (
    <>
      {richTextArr.map((richText: any) => {
        const className = annotationToClassName(richText.annotations, prefix);
        if (richText.href && isNextLink) {
          return (
            <Link href={richText.href}>
              <a className={className}>{richText.text.content}</a>
            </Link>
          );
        } else if (richText.href) {
          return (
            <a href={richText.href} className={className}>
              {richText.text.content}
            </a>
          );
        }
        return <span className={className}>{richText.text.content}</span>;
      })}
    </>
  );
};
export default TextRenderer;
