# notion-block-renderer

<!-- > **Warning**   -->
> v2.0.x ~: `isNextJS` of main props was removed.

<br />

This package is suitable for use with Reactjs or Nextjs.

<br />

## Notion API verion

This package compatible to the `2022-02-22` version of Notion API.

Notion API version: https://developers.notion.com/reference/changes-by-version


<br />

## Usage

```js
import NotionBlocks from "notion-block-renderer";

const Sample = ({ blocks }) => {
    return (
        <div>
            <NotionBlocks
                blocks={blocks}
            />
        </div>
    );
}

```

You have to pass `blocks`. 

`blocks` is result of a response object as follows:

```js
const response = await notion.blocks.children.list({ block_id: id });
``` 

For more detail, see the Notion docs.

https://developers.notion.com/reference/get-block-children

<br />

## Code Block Usage

By default, code blocks are unstyled. The option `isCodeHighlighter` can be used to easily set the style. 

This package defaults to [react-syntax-highlighter](https://www.npmjs.com/package/react-syntax-highlighter) when `isCodeHighlighter` is `true`. Use.


```js
const Sample = ({ blocks }) => {
    return (
        <div>
            <NotionBlocks
                blocks={blocks}
                isCodeHighlighter={true}
            />
        </div>
    );
}
```

You can also set custom style CSS for the `syntaxHighlighterCSS` option. 

You can choose to provide 

- your own CSS or
- use [react-syntax-highlighter](https://www.npmjs.com/package/react-syntax-highlighter)'s style.

<br />

### react-syntax-highlighter style usage

First you need to install `react-syntax-highlighter`.

https://www.npmjs.com/package/react-syntax-highlighter


Then import styles to use.

```js
import {
  monokaiSublime,
  irBlack,
  tomorrowNightBright,
  monokai,
} from "react-syntax-highlighter/dist/cjs/styles/hljs";

const Sample = ({ blocks }) => {
    return (
        <div>
            <NotionBlocks
                blocks={blocks}
                isCodeHighlighter={true}
                syntaxHighlighterCSS={monokaiSublime}
            />
        </div>
    );
}
```

<br />

### your own CSS style usage

`syntaxHighlighterCSS` has the following type.

```js
{
    [key: string]: React.CSSProperties;
}
```

<br />

### Code block samples

**Unstyled:**
<img width="450" alt="codeblock-unstyled" src="https://user-images.githubusercontent.com/53621441/176984909-a2f7cdaa-e043-41eb-bb8b-5598322f159d.png">

**Styled:**
<img width="450" alt="codeblock-styled" src="https://user-images.githubusercontent.com/53621441/176984906-fd1c5bc5-5eb3-4ea0-aa44-8bb8be0fa5f9.png">

<br />

## Props

The `NotionBlocks` component has several props.


| Prop name | Description | Default value | Example values |
| --- | --- | --- | --- |
| blocks | Notion api blocks. See [Notion docs](https://developers.notion.com/reference/get-block-children). | (None) | --- |
| prefix | Add prefix to className of each html component. | "nbr" | --- |
| blockPrefix | Add prefix to className of each block html component. | "block" | --- |
| blocksPrefix | Add prefix to className of blocks html component. | "blocks" | --- |
| isCodeHighlighter | Code block's style. If true, code blocks are styled by CSS. | false | true |
| syntaxHighlighterCSS | If `isCodeHighlighter` is true, you can change style to your own CSS. Using [react-syntax-highlighter](https://www.npmjs.com/package/react-syntax-highlighter)'s styled CSS is easy way. | `tomorrowNightBright` | `monokaiSublime` |


<br />

### type

The props type for `blocks` is as follows. This is just a reference code. See currect type: [types.ts](https://github.com/takux/notion-block-renderer/blob/a67187542aa170e12ecd69e0afb11a2734509a34/src/types.ts).


```js
type BlocksProps = {
  blocks: BlockType[];
  prefix?: string;
  blockPrefix?: string;
  blocksPrefix?: string;
  isCodeHighlighter?: boolean;
  syntaxHighlighterCSS?: {
    [key: string]: React.CSSProperties;
  };
};
```