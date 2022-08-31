import { FC } from "react";
import { BlockType } from "../types/types";
import TextRenderer from "./TextRenderer";

const TableOfContentsRenderer: FC<{ blocks: BlockType[] }> = ({ blocks }) => {
  return (
    <>
      {blocks.map((block: any) => {
        if (
          block.type === "heading_1" ||
          block.type === "heading_2" ||
          block.type === "heading_3"
        ) {
          return (
            <div key={block.id}>
              <a href={`#${block.id}`}>
                {block[block.type].rich_text && (
                  <TextRenderer richTextArr={block[block.type].rich_text} />
                )}
              </a>
            </div>
          );
        }
      })}
    </>
  );
};
export default TableOfContentsRenderer;
