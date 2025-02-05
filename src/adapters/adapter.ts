export interface Result {
  origininput: string;
  title: string;
  subtitle: string;
  arg: string;
  pronounce: string;
  quicklookurl?: string;
}

export interface Adapter {
  key: string;

  secret: string;

  word: string;

  isChinese: boolean;

  url :(word: string) => string;

  parse: (response: any) => Result[]
}

