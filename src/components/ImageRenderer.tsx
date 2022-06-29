import { FC } from "react";

// import { Context } from "./NotionBlock";
// import { useContext } from "react";

type ImageProps = {
  url: string;
};

const ImageRenderer: FC<ImageProps> = ({ url }) => {
  // const { prefix } = useContext(Context);
  return <div>{url && <img src={url} />}</div>;
};

export default ImageRenderer;
