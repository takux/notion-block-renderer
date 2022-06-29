import { FC } from "react";
import { FileProps } from "../types";

const ImageRenderer: FC<FileProps> = ({ url }) => {
  return <>{url && <img src={url} />}</>;
};

export default ImageRenderer;
