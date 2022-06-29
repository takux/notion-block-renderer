import { FC } from "react";
import { BlockEnum, BlockProps } from "../types";
import CodeRenderer from "./CodeRenderer";
import ImageRenderer from "./ImageRenderer";
import TextRenderer from "./TextRenderer";
import { useContext } from "react";
import { BLOCKS_PREFIX, BLOCK_PREFIX, PREFIX } from "../config";
import { Context } from "../utils";

export const NotionBlock: FC<BlockProps> = ({
  block,
  prefix = PREFIX,
  blockPrefix = BLOCK_PREFIX,
  blocksPrefix = BLOCKS_PREFIX,
  isNextJS = true,
}) => {
  return (
    <Context.Provider
      key={block.id}
      value={{
        prefix: prefix,
        isNextJS: isNextJS,
        blockPrefix: blockPrefix,
        blocksPrefix: blocksPrefix,
      }}
    >
      <NotionBlockCore block={block} />
    </Context.Provider>
  );
};

const NotionBlockCore: FC<BlockProps> = ({ block }) => {
  const { prefix } = useContext(Context);
  switch (block.type) {
    case BlockEnum.paragraph:
      if (block[block.type].rich_text.length > 0) {
        return (
          <p className={`${prefix}-${BLOCK_PREFIX}-p`}>
            <TextRenderer richTextArr={block[block.type].rich_text} />
          </p>
        );
      }
      return (
        <p className={`${prefix}-${BLOCK_PREFIX}-p`}>
          <br />
        </p>
      );
    case BlockEnum.heading_2:
      return (
        <h2 className={`${prefix}-${BLOCK_PREFIX}-h2`}>
          <TextRenderer richTextArr={block[block.type].rich_text} />
        </h2>
      );
    case BlockEnum.heading_3:
      return (
        <h3 className={`${prefix}-${BLOCK_PREFIX}-h3`}>
          <TextRenderer richTextArr={block[block.type].rich_text} />
        </h3>
      );
    case BlockEnum.code:
      return (
        <div className={`${prefix}-${BLOCK_PREFIX}-code`}>
          <CodeRenderer
            lang={block[block.type].language}
            richTextArr={block[block.type].rich_text}
          />
        </div>
      );
    case BlockEnum.image:
      return (
        <div className={`${prefix}-${BLOCK_PREFIX}-image`}>
          <ImageRenderer url={block[block.type].file.url} />
          <div className={`${prefix}-caption`}>
            <TextRenderer richTextArr={block[block.type].caption} />
          </div>
        </div>
      );
    default:
      console.log(block.type);
  }
  return <></>;
};
export default NotionBlock;
