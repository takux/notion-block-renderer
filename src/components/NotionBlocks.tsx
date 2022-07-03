import { FC } from "react";
import {
  BLOCKS_PREFIX,
  BLOCK_PREFIX,
  IS_CODE_HIGHLIGHTER,
  // IS_NEXTJS,
  PREFIX,
  SYNTAX_HIGHLIGHTER_CSS,
} from "../config";
import { BlocksProps } from "../types";
import { Context } from "../utils";
import { getBlocks } from "./BlockRenderer";

const NotionBlocks: FC<BlocksProps> = ({
  blocks,
  prefix,
  blockPrefix,
  blocksPrefix,
  // isNextJS,
  isCodeHighlighter,
  syntaxHighlighterCSS,
}) => {
  const initialPrefix = prefix !== undefined ? prefix : PREFIX;
  return (
    <Context.Provider
      value={{
        prefix: initialPrefix,
        blockPrefix: blockPrefix !== undefined ? blockPrefix : BLOCK_PREFIX,
        blocksPrefix: blocksPrefix !== undefined ? blocksPrefix : BLOCKS_PREFIX,
        // isNextJS: isNextJS !== undefined ? isNextJS : IS_NEXTJS,
        isCodeHighlighter:
          isCodeHighlighter !== undefined
            ? isCodeHighlighter
            : IS_CODE_HIGHLIGHTER,
        syntaxHighlighterCSS:
          syntaxHighlighterCSS !== undefined
            ? syntaxHighlighterCSS
            : SYNTAX_HIGHLIGHTER_CSS,
      }}
    >
      <div className={`${initialPrefix}-${BLOCKS_PREFIX}`}>
        {getBlocks(blocks)}
      </div>
    </Context.Provider>
  );
};

export default NotionBlocks;
