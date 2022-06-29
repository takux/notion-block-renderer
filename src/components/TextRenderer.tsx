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

const TextRenderer: FC<TextProps> = ({
  richTextArr,
  isNextLink = true,
  isCaption = false,
}) => {
  const { prefix } = useContext(Context);
  return (
    <div className={isCaption ? `${prefix}-caption` : `${prefix}-text`}>
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
    </div>
  );
};
export default TextRenderer;
