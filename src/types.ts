export enum AnnotationEnum {
  bold = "bold",
  code = "code",
  italic = "italic",
  underline = "underline",
  color = "color",
}

export type AnnotationType = {
  bold: boolean;
  code: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  color: string;
};

// https://developers.notion.com/reference/rich-text
export type RichTextType = {
  plain_text: string;
  href?: string;
  annotations: AnnotationType;
  type: string;
  //   text: {
  //     content: string;
  //     link: {
  //       url: string;
  //     };
  //   };
};

// https://developers.notion.com/reference/block
export enum BlockEnum {
  paragraph = "paragraph",
  heading_1 = "heading_1",
  heading_2 = "heading_2",
  heading_3 = "heading_3",
  callout = "callout",
  quote = "quote",
  bulleted_list_item = "bulleted_list_item",
  numbered_list_item = "numbered_list_item",
  code = "code",
  image = "image",
  video = "video",

  //   to_do = "to_do",
  //   toggle = "toggle",
  //   child_page = "child_page",
  //   child_database = "child_database",
  //   embed = "embed",
  //   file = "file",
  //   pdf = "pdf",
  //   bookmark = "bookmark",
  //   equation = "equation",
  //   divider = "divider",
  //   table_of_contents = "table_of_contents",
  //   link_to_page = "link_to_page",
  //   table = "table",
}

type TextBlockType = {
  color: string;
  rich_text: RichTextType[];
};

type CodeBlockType = {
  rich_text: RichTextType[];
  caption: RichTextType[];
  language: string;
};

type ImageBlockType = {
  caption: RichTextType[];
  file: {
    expiry_time?: string;
    url: string;
  };
  type: string;
};

export type BlockType = {
  id: string;
  type: string;
  paragraph: TextBlockType;
  heading_1: TextBlockType;
  heading_2: TextBlockType;
  heading_3: TextBlockType;
  code: CodeBlockType;
  image: ImageBlockType;
};
