import { FC } from "react";
import { FileProps } from "../types";

const VideoRenderer: FC<FileProps> = ({ url }) => {
  return (
    <video>
      {/* width="400px" */}
      <source src={url} />
    </video>
  );
};

export default VideoRenderer;
