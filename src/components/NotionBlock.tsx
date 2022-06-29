import { FC, createContext } from "react";

import { BlockEnum, BlockType } from "../types";
import CodeRenderer from "./CodeRenderer";
import ImageRenderer from "./ImageRenderer";
import TextRenderer from "./TextRenderer";

import { useContext } from "react";

export const Context = createContext({
  prefix: "nm",
  isNextJS: true,
});

type BlockProps = {
  block: BlockType;
  prefix?: string;
  isNextJS?: boolean;
};

const NotionBlock: FC<BlockProps> = ({
  block,
  prefix = "nm",
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
  console.log("呼ばれました", 999);
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
    // case BlockEnum.image:
    case "image":
      console.log("呼ばれました", 123, block);
      return (
        <div className={`${prefix}-bl-image`}>
          <ImageRenderer url={block[block.type].file.url} />
          <TextRenderer
            richTextArr={block[block.type].caption}
            isCaption={true}
          />
        </div>
      );
    default:
      console.log(block.type);
  }
  return <></>;
};
export default NotionBlock;
