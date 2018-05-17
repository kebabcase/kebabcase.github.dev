import {Parser, HtmlRenderer} from 'commonmark';

// https://github.com/commonmark/commonmark.js/
class MarkdownWriter {
  private reader = new Parser();
  private writer = new HtmlRenderer();

  public render(markdown: string): string {
    return this.writer.render(this.reader.parse(markdown));
  }
}

const markdownWriter = new MarkdownWriter();
export {markdownWriter};
