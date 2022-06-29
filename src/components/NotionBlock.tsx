import { FC, createContext } from "react";

import { BlockEnum, BlockType } from "../types";
import CodeRenderer from "./CodeRenderer";
import ImageRenderer from "./ImageRenderer";
import TextRenderer from "./TextRenderer";

import { useContext } from "react";

export const Context = createContext({
  prefix: "nbr",
  isNextJS: true,
});

type BlockProps = {
  block: BlockType;
  prefix?: string;
  isNextJS?: boolean;
};

const NotionBlock: FC<BlockProps> = ({
  block,
  prefix = "nbr",
  isNextJS = true,
}) => {
  return (
    <Context.Provider
      key={block.id}
      value={{
        prefix: prefix,
        isNextJS: isNextJS,
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
          <p className={`${prefix}-bl-p`}>
            <TextRenderer richTextArr={block[block.type].rich_text} />
          </p>
        );
      }
      return (
        <p className={`${prefix}-bl-p`}>
          <br />
        </p>
      );
    case BlockEnum.heading_2:
      return (
        // className={isCaption ? `${prefix}-caption` : `${prefix}-text`}
        <h2 className={`${prefix}-bl-h2`}>
          <TextRenderer richTextArr={block[block.type].rich_text} />
        </h2>
      );
    case BlockEnum.heading_3:
      return (
        <h3 className={`${prefix}-bl-h3`}>
          <TextRenderer richTextArr={block[block.type].rich_text} />
        </h3>
      );
    case BlockEnum.code:
      return (
        <div className={`${prefix}-bl-code`}>
          <CodeRenderer
            lang={block[block.type].language}
            richTextArr={block[block.type].rich_text}
          />
        </div>
      );
    case BlockEnum.image:
      return (
        <div className={`${prefix}-bl-image`}>
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
