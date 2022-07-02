# notion-block-renderer

## Notion API verion

This package compatible to the `2022-02-22` version of Notion API.

Notion API version: https://developers.notion.com/reference/changes-by-version


## Usage

```typescript
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

```
const response = await notion.blocks.children.list({ block_id: id });
``` 

For more detail, see the Notion docs.

https://developers.notion.com/reference/get-block-children


## Code Block Usage

By default, code blocks are unstyled. The option `isCodeHighlighter` can be used to easily set the style. 

This package defaults to [react-syntax-highlighter](https://www.npmjs.com/package/react-syntax-highlighter) when `isCodeHighlighter` is `true`. Use.


```typescript
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


### react-syntax-highlighter style usage

First you need to install `react-syntax-highlighter`.

https://www.npmjs.com/package/react-syntax-highlighter


Then import styles to use.

```typescript
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

### your own CSS style usage

`syntaxHighlighterCSS` has the following type.

```typescript
{
    [key: string]: React.CSSProperties;
}
```
