import { FC } from "react";
import { FileBlocProps } from "../types";

const VideoRenderer: FC<FileBlocProps> = ({ block }) => {
  if (block.external) {
    return (
      <video>
        {/* width="400px" */}
        <source src={block.external.url} />
      </video>
    );
  } else if (block.file) {
    return (
      <video>
        {/* width="400px" */}
        <source src={block.file.url} />
      </video>
    );
  }
  return <></>;
};

export default VideoRenderer;
