import { FC } from "react";
import { BlockEnum, BlockProps } from "../types";
import CodeRenderer from "./CodeRenderer";
import ImageRenderer from "./ImageRenderer";
import TextRenderer from "./TextRenderer";
import { useContext } from "react";
import { PACKAGE_NAME } from "../config";
import { Context } from "../utils";
import VideoRenderer from "./VideoRenderer";

const NotionBlockCore: FC<BlockProps> = ({ block }) => {
  const { prefix, blockPrefix } = useContext(Context);
  switch (block.type) {
    case BlockEnum.paragraph:
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
    case BlockEnum.heading_1:
      return (
        <div className={`${prefix}-${blockPrefix}-h1`}>
          <h1>
            <TextRenderer richTextArr={block[block.type].rich_text} />
          </h1>
        </div>
      );
    case BlockEnum.heading_2:
      return (
        <div className={`${prefix}-${blockPrefix}-h2`}>
          <h2>
            <TextRenderer richTextArr={block[block.type].rich_text} />
          </h2>
        </div>
      );
    case BlockEnum.heading_3:
      return (
        <div className={`${prefix}-${blockPrefix}-h3`}>
          <h3>
            <TextRenderer richTextArr={block[block.type].rich_text} />
          </h3>
        </div>
      );
    case BlockEnum.bulleted_list_item:
      return (
        <li className={`${prefix}-${blockPrefix}-bulleted_list_item`}>
          <TextRenderer richTextArr={block[block.type].rich_text} />
        </li>
      );
    case BlockEnum.numbered_list_item:
      return (
        <li className={`${prefix}-${blockPrefix}-numbered_list_item`}>
          <TextRenderer richTextArr={block[block.type].rich_text} />
        </li>
      );
    case BlockEnum.quote:
      return (
        <div className={`${prefix}-${blockPrefix}-quote`}>
          <div>
            <TextRenderer richTextArr={block[block.type].rich_text} />
          </div>
        </div>
      );
    case BlockEnum.callout:
      return (
        <div className={`${prefix}-${blockPrefix}-callout`}>
          <div className={`${prefix}-icon`}>{block[block.type].icon.emoji}</div>
          <div className={`${prefix}-callout`}>
            <TextRenderer richTextArr={block[block.type].rich_text} />
          </div>
        </div>
      );
    case BlockEnum.code:
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
    case BlockEnum.image:
      return (
        <div className={`${prefix}-${blockPrefix}-image`}>
          <div className={`${prefix}-image`}>
            <ImageRenderer url={block[block.type].file.url} />
          </div>
          <div className={`${prefix}-caption`}>
            <TextRenderer richTextArr={block[block.type].caption} />
          </div>
        </div>
      );
    case BlockEnum.video:
      return (
        <div className={`${prefix}-${blockPrefix}-video`}>
          <div className={`${prefix}-video`}>
            <VideoRenderer url={block[block.type].file.url} />
          </div>
          <div className={`${prefix}-caption`}>
            <TextRenderer richTextArr={block[block.type].caption} />
          </div>
        </div>
      );
    default:
      console.log(
        `This '${block.type}' type not yet configured in ${PACKAGE_NAME}`
      );
  }
  return <></>;
};
export default NotionBlockCore;
