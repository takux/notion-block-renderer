import { FC } from "react";
import { BLOCKS_PREFIX, BLOCK_PREFIX, PREFIX } from "../config";
import { BlocksProps, BlockType } from "../types";
import { Context } from "../utils";
import NotionBlockCore from "./NotionBlock";

const NotionBlocks: FC<BlocksProps> = ({
  blocks,
  prefix = PREFIX,
  blockPrefix = BLOCK_PREFIX,
  blocksPrefix = BLOCKS_PREFIX,
  isNextJS = true,
}) => {
  return (
    <Context.Provider
      value={{
        prefix: prefix,
        isNextJS: isNextJS,
        blockPrefix: blockPrefix,
        blocksPrefix: blocksPrefix,
      }}
    >
      <div className={`${prefix}-${BLOCKS_PREFIX}`}>
        {blocks.map((block: BlockType, index: number) => (
          <NotionBlockCore key={index} block={block} />
        ))}
      </div>
    </Context.Provider>
  );
};

export default NotionBlocks;
