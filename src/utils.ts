import { createContext } from "react";
import {
  BLOCKS_PREFIX,
  BLOCK_PREFIX,
  IS_CODE_HIGHLIGHTER,
  IS_NEXTJS,
  PREFIX,
} from "./config";
import { AnnotationType } from "./types";

export function annotationToClassName(
  annotations: AnnotationType,
  prefix?: string
) {
  const classNames = [];
  if (annotations.bold) classNames.push(`${prefix}-bold`);
  if (annotations.code) classNames.push(`${prefix}-inline-code`);
  if (annotations.italic) classNames.push(`${prefix}-italic`);
  if (annotations.strikethrough) classNames.push(`${prefix}-trikethrough`);
  if (annotations.underline) classNames.push(`${prefix}-underline`);
  if (annotations.color !== "default")
    classNames.push(`${prefix}-color-${annotations.color}`);
  return classNames.join(" ");
}

export const Context = createContext({
  prefix: PREFIX,
  isNextJS: IS_NEXTJS,
  blockPrefix: BLOCK_PREFIX,
  blocksPrefix: BLOCKS_PREFIX,
  isCodeHighlighter: IS_CODE_HIGHLIGHTER,
});
