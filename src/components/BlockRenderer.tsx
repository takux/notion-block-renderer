// import { FC } from "react";
import { BlockListEnum, BlockType } from "../types";
import BlockList from "./BlockList";
import NotionBlockCore from "./NotionBlockCore";

export const getBlocks = (blocks: BlockType[]) => {
  let preBlockType = "";
  let components: JSX.Element[] = [];
  let blockArray = [];

  for (const [index, block] of blocks.entries()) {
    let isPreBlockList = Object.values(BlockListEnum).includes(preBlockType);
    let isCurrentBlockList = Object.values(BlockListEnum).includes(block.type);

    /**
     * this case end block group and push to components
     * 1. end blockList
     * 2. Since the current block is not blockListType, need to push to components
     * 3. empty blockArray
     * 4. set preBlockType to empty
     */
    if (isPreBlockList && !isCurrentBlockList) {
      // 1.
      components.push(
        <BlockList key={`${index}.1`} blockType={preBlockType}>
          {blockArray}
        </BlockList>
      );
      // 2.
      components.push(<NotionBlockCore key={`${index}.2`} block={block} />);
      // 3.
      blockArray = [];
      // 4.
      preBlockType = "";
      continue;
    }

    /**
     * list block is ongoing
     */
    if (isPreBlockList && isCurrentBlockList && block.type === preBlockType) {
      blockArray.push(<NotionBlockCore key={`${index}`} block={block} />);
      continue;
    }

    /**
     * Start of blockListType
     */
    if (!isPreBlockList && isCurrentBlockList) {
      blockArray.push(<NotionBlockCore key={`${index}`} block={block} />);
      preBlockType = block.type;
      continue;
    }

    /**
     * Cases of different types of listings between the pre and current one.
     * 1. Since the pre time is set in the list, need to terminate the pre list and push components.
     * 2. Empty the blockArray.
     * 3. Push the current block to blockArray.
     * 4. Set the current blockType to the preBlockType.
     */
    if (isPreBlockList && isCurrentBlockList && block.type !== preBlockType) {
      // 1.
      components.push(
        <BlockList key={`${index}.1`} blockType={preBlockType}>
          {blockArray}
        </BlockList>
      );
      // 2.
      blockArray = [];
      // 3.
      blockArray.push(<NotionBlockCore key={`${index}.2`} block={block} />);
      // 4.
      preBlockType = block.type;
      continue;
    }

    /**
     * This is a case that does not fall under LIST.
     * normal case.
     */
    if (!isPreBlockList && !isCurrentBlockList) {
      components.push(<NotionBlockCore key={`${index}`} block={block} />);
      continue;
    }

    /**
     * exception case
     */
    console.warn(`Exception case`, block);
    components.push(<NotionBlockCore key={`${index}`} block={block} />);
  }

  return components;
};
