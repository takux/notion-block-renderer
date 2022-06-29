import { FC } from "react";
import { ImageProps } from "../types";

const ImageRenderer: FC<ImageProps> = ({ url }) => {
  return <div>{url && <img src={url} />}</div>;
};

export default ImageRenderer;
