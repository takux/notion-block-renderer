import { FC } from "react";
import { BlockEnum } from "../types/types";
import { useContext } from "react";
import { Context } from "../utils";
import { BlockListProps } from "../types/props";

const BlockList: FC<BlockListProps> = ({ blockType, children }) => {
  const { prefix, blockPrefix } = useContext(Context);
  if (blockType === BlockEnum.bulleted_list_item) {
    return <ul className={`${prefix}-${blockPrefix}-ul`}>{children}</ul>;
  }
  if (blockType === BlockEnum.numbered_list_item) {
    return <ol className={`${prefix}-${blockPrefix}-ol`}>{children}</ol>;
  }
  return <>{children}</>;
};

export default BlockList;
