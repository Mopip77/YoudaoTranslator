import { Result } from "../adapters/adapter";
import Item from "./item";

class Workflow {

  private VAR_SEPARATOR: string = '=====';

  private results: any[] = [];

  compose(results: Result[]): this {
    this.results = results.map(r => {
      const isPronounce = r.arg.startsWith("~");
      const icon = isPronounce ? 'assets/translate-say.png' : 'assets/translate.png'
      return new Item().setTitle(r.title)
      .setSubtitle(r.subtitle)
      .setArg(r.arg)
      .setIcon(icon)
      .setCmd('🔊 ' + r.pronounce, r.pronounce)
      .setAlt('📣 ' + r.pronounce, r.pronounce)
      .setCtrl('对比翻译', r.origininput + this.VAR_SEPARATOR + r.arg, !isPronounce)
      .setCopy(r.title)
      .setQuicklookurl(r.quicklookurl)
      .result();
    });

    return this;
  }

  output(): string {
    return JSON.stringify({ items: this.results });
  }
}

export default Workflow;