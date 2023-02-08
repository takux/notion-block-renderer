import { FC } from "react";
import { FileBlockProps } from "../types/props";

const VideoRenderer: FC<FileBlockProps> = ({ block }) => {
  if (block.external) {
    return (
      <iframe
        width="560"
        height="315"
        src={block.external.url}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />
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
