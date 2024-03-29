import { FC } from "react";
import CodeRenderer from "./CodeRenderer";
import ImageRenderer from "./ImageRenderer";
import TextRenderer from "./TextRenderer";
import { useContext } from "react";
import { PACKAGE_NAME } from "../config";
import { Context } from "../utils";
import VideoRenderer from "./VideoRenderer";
import { BlockProps } from "../types/props";
import TableOfContentsRenderer from "./TableOfContentsRenderer";

const NotionBlockCore: FC<
  BlockProps & {
    blocks?: BlockProps["block"][];
  }
> = ({ block, blocks }) => {
  const { prefix, blockPrefix } = useContext(Context);
  switch (block.type) {
    case "paragraph":
      if (block[block.type].rich_text.length > 0) {
        return (
          <div className={`${prefix}-${blockPrefix}-p`}>
            <p>
              <TextRenderer richTextArr={block[block.type].rich_text} />
            </p>
          </div>
        );
      }
      return (
        <div className={`${prefix}-${blockPrefix}-p`}>
          <p>
            <br />
          </p>
        </div>
      );
    case "heading_1":
      return (
        <div id={`${block.id}`} className={`${prefix}-${blockPrefix}-h1`}>
          <h1>
            <TextRenderer richTextArr={block[block.type].rich_text} />
          </h1>
        </div>
      );
    case "heading_2":
      return (
        <div id={`${block.id}`} className={`${prefix}-${blockPrefix}-h2`}>
          <h2>
            <TextRenderer richTextArr={block[block.type].rich_text} />
          </h2>
        </div>
      );
    case "heading_3":
      return (
        <div id={`${block.id}`} className={`${prefix}-${blockPrefix}-h3`}>
          <h3>
            <TextRenderer richTextArr={block[block.type].rich_text} />
          </h3>
        </div>
      );
    case "table_of_contents":
      return (
        <div
          id={`${block.id}`}
          className={`${prefix}-${blockPrefix}-table_of_contents`}
        >
          {blocks && <TableOfContentsRenderer blocks={blocks} />}
        </div>
      );
    case "bulleted_list_item":
      return (
        <li className={`${prefix}-${blockPrefix}-bulleted_list_item`}>
          <TextRenderer richTextArr={block[block.type].rich_text} />
        </li>
      );
    case "numbered_list_item":
      return (
        <li className={`${prefix}-${blockPrefix}-numbered_list_item`}>
          <TextRenderer richTextArr={block[block.type].rich_text} />
        </li>
      );
    case "quote":
      return (
        <div className={`${prefix}-${blockPrefix}-quote`}>
          <div>
            <TextRenderer richTextArr={block[block.type].rich_text} />
          </div>
        </div>
      );
    case "callout":
      return (
        <div className={`${prefix}-${blockPrefix}-callout`}>
          <div className={`${prefix}-icon`}>{block[block.type].icon.emoji}</div>
          <div className={`${prefix}-callout`}>
            <TextRenderer richTextArr={block[block.type].rich_text} />
          </div>
        </div>
      );
    case "code":
      return (
        <div className={`${prefix}-${blockPrefix}-code`}>
          <CodeRenderer
            lang={block[block.type].language}
            richTextArr={block[block.type].rich_text}
          />
          <div className={`${prefix}-caption`}>
            <TextRenderer richTextArr={block[block.type].caption} />
          </div>
        </div>
      );
    case "image":
      return (
        <div className={`${prefix}-${blockPrefix}-image`}>
          <div className={`${prefix}-image`}>
            <ImageRenderer block={block[block.type]} />
          </div>
          <div className={`${prefix}-caption`}>
            <TextRenderer richTextArr={block[block.type].caption} />
          </div>
        </div>
      );
    case "video":
      return (
        <div className={`${prefix}-${blockPrefix}-video`}>
          <div className={`${prefix}-video`}>
            <VideoRenderer block={block[block.type]} />
          </div>
          <div className={`${prefix}-caption`}>
            <TextRenderer richTextArr={block[block.type].caption} />
          </div>
        </div>
      );
    default:
      console.log(`This block type not yet configured in ${PACKAGE_NAME}`);
  }
  return <></>;
};
export default NotionBlockCore;
