import { FC } from "react";
import {
  BLOCKS_PREFIX,
  BLOCK_PREFIX,
  IS_CODE_HIGHLIGHTER,
  IS_NEXTJS,
  PREFIX,
} from "../config";
import { BlocksProps } from "../types";
import { Context } from "../utils";
import { getBlocks } from "./BlockRenderer";

const NotionBlocks: FC<BlocksProps> = ({
  blocks,
  prefix,
  blockPrefix,
  blocksPrefix,
  isNextJS,
  isCodeHighlighter,
}) => {
  console.log(1111, isCodeHighlighter);
  return (
    <Context.Provider
      value={{
        prefix: prefix !== undefined ? prefix : PREFIX,
        blockPrefix: blockPrefix !== undefined ? blockPrefix : BLOCK_PREFIX,
        blocksPrefix: blocksPrefix !== undefined ? blocksPrefix : BLOCKS_PREFIX,
        isNextJS: isNextJS !== undefined ? isNextJS : IS_NEXTJS,
        isCodeHighlighter:
          isCodeHighlighter !== undefined
            ? isCodeHighlighter
            : IS_CODE_HIGHLIGHTER,
      }}
    >
      <div className={`${prefix}-${BLOCKS_PREFIX}`}>
        {getBlocks(blocks)}
        {/* {blocks.map((block: BlockType, index: number) => {
          getBlocks(blocks)

          // set current blockType to preBlockType
          preBlockType = block.type;
          return <NotionBlockCore key={index} block={block} />;
        })} */}
      </div>
    </Context.Provider>
  );
};

export default NotionBlocks;
