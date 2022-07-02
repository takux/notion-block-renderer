import { create } from "react-test-renderer";
import CodeRenderer from "../components/CodeRenderer";

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

it("changes the class when hovered", () => {
  const component = create(
    <CodeRenderer lang="typescript" richTextArr={richTextArr} />
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
