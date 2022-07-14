import { BlockType, FileBlockType, RichTextType } from "./types";

export type BlockProps = {
  block: BlockType;
  prefix?: string;
  blockPrefix?: string;
  blocksPrefix?: string;
  // isNextJS?: boolean;
  isCodeHighlighter?: boolean;
  syntaxHighlighterCSS?: {
    [key: string]: React.CSSProperties;
  };
};

export type BlocksProps = Omit<BlockProps, "block"> & {
  blocks: BlockType[];
};

export type TextProps = {
  richTextArr: any;
  isCaption?: boolean;
};

// export type FileProps = {
//   url: string;
// };
// export type ImageProps = {
//   url: string;
// };

export type CodeProps = {
  lang: string;
  richTextArr: RichTextType[];
};

export type BlockListProps = {
  blockType: string;
  children: JSX.Element[];
};

export type FileBlockProps = {
  block: FileBlockType;
};
