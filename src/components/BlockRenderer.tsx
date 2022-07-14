// import { FC } from "react";
import { BlockListEnum, BlockType } from "../types/types";
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
     * This is a case that does not fall under LIST.
     * normal case.
     *
     * example:
     * <div></div> <= pre
     * <div></div> <= current
     */
    if (!isPreBlockList && !isCurrentBlockList) {
      components.push(<NotionBlockCore key={`${index}`} block={block} />);
      continue;
    }

    /**
     * this case end block group and push to components
     *
     * example:
     * <ol>
     *  <li></li> <= pre
     * </ol> <= add
     * <div></di> <= current
     */
    if (isPreBlockList && !isCurrentBlockList) {
      // 1. end blockList
      components.push(
        <BlockList key={`${index}.1`} blockType={preBlockType}>
          {blockArray}
        </BlockList>
      );
      // 2. Since the current block is not blockListType, need to push to components
      components.push(<NotionBlockCore key={`${index}.2`} block={block} />);
      // 3. empty blockArray
      blockArray = [];
      // 4. set preBlockType to empty
      preBlockType = "";
      continue;
    }

    /**
     * list block is ongoing
     *
     * example:
     * <ol>
     *  <li></li> <= pre (type: ol)
     *  <li></li> <= current (type: ol, same as pre)
     */
    if (isPreBlockList && isCurrentBlockList && block.type === preBlockType) {
      blockArray.push(<NotionBlockCore key={`${index}.1`} block={block} />);

      /**
       * current block is last
       *
       * example:
       * <ol>
       *  <li></li> <= current (this is last block)
       *  *** <= no more blocks
       * </ol> <= add
       */
      if (index + 1 === blocks.length) {
        // add end blockList
        components.push(
          <BlockList key={`${index}.2`} blockType={block.type}>
            {blockArray}
          </BlockList>
        );
      }

      continue;
    }

    /**
     * Start of blockListType
     *
     * example:
     * <div></div> <= pre
     * <ol> <= add
     *  <li></li> <= current
     */
    if (!isPreBlockList && isCurrentBlockList) {
      blockArray.push(<NotionBlockCore key={`${index}.1`} block={block} />);
      preBlockType = block.type;
      /**
       * current block is last
       *
       * example:
       * <ol>
       *  <li></li> <= current (this is last block)
       *  *** <= no more blocks
       * </ol> <= add
       */
      if (index + 1 === blocks.length) {
        // add end blockList
        components.push(
          <BlockList key={`${index}.2`} blockType={block.type}>
            {blockArray}
          </BlockList>
        );
      }

      continue;
    }

    /**
     * Cases of different types of listings between the pre and current one.
     *
     * example:
     * <ul>
     *  <li></li> <= pre
     * </ul> <= add
     * <ol> <= add
     *  <li></li> <= current
     */
    if (isPreBlockList && isCurrentBlockList && block.type !== preBlockType) {
      // 1. Since the pre time is set in the list, need to terminate the pre list and push components.
      components.push(
        <BlockList key={`${index}.1`} blockType={preBlockType}>
          {blockArray}
        </BlockList>
      );
      // 2. Empty the blockArray.
      blockArray = [];
      // 3. Push the current block to blockArray.
      blockArray.push(<NotionBlockCore key={`${index}.2`} block={block} />);
      // 4. Set the current blockType to the preBlockType.
      preBlockType = block.type;

      /**
       * current block is last
       *
       * example:
       * <ol>
       *  <li></li> <= current (this is last block)
       *  *** <= no more blocks
       * </ol> <= add
       */
      if (index + 1 === blocks.length) {
        // add end blockList
        components.push(
          <BlockList key={`${index}.3`} blockType={block.type}>
            {blockArray}
          </BlockList>
        );
      }

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
