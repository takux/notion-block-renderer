import { create } from "react-test-renderer";
import CodeRenderer from "../components/CodeRenderer";
import { createContext } from "react";
import { useContext } from "react";
import {
  BLOCKS_PREFIX,
  BLOCK_PREFIX,
  IS_CODE_HIGHLIGHTER,
  IS_NEXTJS,
  PREFIX,
  SYNTAX_HIGHLIGHTER_CSS,
} from "../config";

const annotations = {
  bold: false,
  code: false,
  italic: false,
  strikethrough: false,
  underline: false,
  color: "default",
};

const richTextArr = [
  {
    plain_text: `export enum Property {
      Name = "Name",
      cover = "cover",
      Author = "Author",
      Description = "Description",
      Slug = "Slug",
      Public = "Public",
      Published = "Published",
      Tags = "Tags",
    }`,
    href: "",
    annotations: annotations,
    type: "",
    //   text: {
    //     content: string;
    //     link: {
    //       url: string;
    //     };
    //   };
  },
];

export const Context = createContext({
  prefix: PREFIX,
  isNextJS: IS_NEXTJS,
  blockPrefix: BLOCK_PREFIX,
  blocksPrefix: BLOCKS_PREFIX,
  // isCodeHighlighter: IS_CODE_HIGHLIGHTER,
  isCodeHighlighter: true,
  syntaxHighlighterCSS: SYNTAX_HIGHLIGHTER_CSS,
});

it("changes the class when hovered", () => {
  const component = create(
    <Context.Provider
      value={{
        prefix: PREFIX,
        blockPrefix: BLOCK_PREFIX,
        blocksPrefix: BLOCKS_PREFIX,
        isNextJS: IS_NEXTJS,
        // isCodeHighlighter: IS_CODE_HIGHLIGHTER,
        isCodeHighlighter: true,
        syntaxHighlighterCSS: SYNTAX_HIGHLIGHTER_CSS,
      }}
    >
      <CodeRenderer lang="typescript" richTextArr={richTextArr} />
    </Context.Provider>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // // manually trigger the callback
  // renderer.act(() => {
  //   tree.props.onMouseEnter();
  // });
  // re-rendering
  // tree = component.toJSON();
  // expect(tree).toMatchSnapshot();

  // // manually trigger the callback
  // renderer.act(() => {
  //   tree.props.onMouseLeave();
  // });
  // re-rendering
  // tree = component.toJSON();
  // expect(tree).toMatchSnapshot();
});
