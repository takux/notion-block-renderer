import { FC } from "react";
import { BlockProps } from "../types";
import {
  BLOCKS_PREFIX,
  BLOCK_PREFIX,
  IS_CODE_HIGHLIGHTER,
  IS_NEXTJS,
  PREFIX,
} from "../config";
import { Context } from "../utils";
import NotionBlockCore from "./NotionBlockCore";

export const NotionBlock: FC<BlockProps> = ({
  block,
  prefix,
  blockPrefix,
  blocksPrefix,
  isNextJS,
  isCodeHighlighter,
}) => {
  return (
    <Context.Provider
      key={block.id}
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
      <NotionBlockCore block={block} />
    </Context.Provider>
  );
};

export default NotionBlock;
