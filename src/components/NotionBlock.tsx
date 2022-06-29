import { FC, createContext } from "react";

import { BlockEnum, BlockType } from "../types";
import CodeRenderer from "./CodeRenderer";
import TextRenderer from "./TextRenderer";

export const Prefix = createContext("nm");

type BlockProps = {
  block: BlockType;
  prefix?: string;
};

const NotionBlock: FC<BlockProps> = ({ block, prefix = "nm" }) => {
  return (
    <Prefix.Provider value={prefix}>
      <NotionBlockCore block={block} />
    </Prefix.Provider>
  );
};

const NotionBlockCore: FC<BlockProps> = ({ block }) => {
  switch (block.type) {
    case BlockEnum.paragraph:
      if (block[block.type].rich_text.length > 0) {
        return (
          <p>
            <TextRenderer richTextArr={block[block.type].rich_text} />
          </p>
        );
      }
      return (
        <p className="">
          <br />
        </p>
      );
    case BlockEnum.heading_2:
      return (
        <h2>
          <TextRenderer richTextArr={block[block.type].rich_text} />
        </h2>
      );
    case BlockEnum.heading_3:
      return (
        <h3>
          <TextRenderer richTextArr={block[block.type].rich_text} />
        </h3>
      );
    case BlockEnum.code:
      return (
        <CodeRenderer
          lang={block[block.type].language}
          richTextArr={block[block.type].rich_text}
        />
      );
    default:
      console.log(block.type);
  }
  return <></>;
};
export default NotionBlock;
