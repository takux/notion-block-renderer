import { FC } from "react";
import Link from "next/link";
import { annotationToClassName } from "../utils";
import { Context } from "./NotionBlock";
import { useContext } from "react";
type TextProps = {
  richTextArr: any;
  isNextLink?: boolean;
  isCaption?: boolean;
};

const TextRenderer: FC<TextProps> = ({ richTextArr, isNextLink = true }) => {
  const { prefix } = useContext(Context);
  return (
    <>
      {richTextArr.map((richText: any, index: number) => {
        const className = annotationToClassName(richText.annotations, prefix);
        if (richText.href && isNextLink) {
          return (
            <Link key={index} href={richText.href}>
              <a className={className}>{richText.text.content}</a>
            </Link>
          );
        }
        if (richText.href) {
          return (
            <a key={index} href={richText.href} className={className}>
              {richText.text.content}
            </a>
          );
        }
        return (
          <span key={index} className={className}>
            {richText.text.content}
          </span>
        );
      })}
    </>
  );
};
export default TextRenderer;
