import { FC } from "react";
import { FileBlocProps } from "../types";

// const ImageRenderer: FC<FileProps> = ({ url }) => {
//   return <img src={url} />;
// };

const ImageRenderer: FC<FileBlocProps> = ({ block }) => {
  if (block.external) {
    return <img src={block.external.url} />;
  } else if (block.file) {
    return <img src={block.file.url} />;
  }
  return <></>;
};

export default ImageRenderer;
