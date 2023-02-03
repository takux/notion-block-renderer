import { FC } from "react";
import { FileBlockProps } from "../types/props";

const VideoRenderer: FC<FileBlockProps> = ({ block }) => {
  if (block.external) {
    return (
      <video controls>
        {/* width="400px" */}
        <source src={block.external.url} />
      </video>
    );
  } else if (block.file) {
    return (
      <video controls>
        {/* width="400px" */}
        <source src={block.file.url} />
      </video>
    );
  }
  return <></>;
};

export default VideoRenderer;
