export type NarutoDataType = Content[];

export interface Content {
  about: string[];
  info: Info;
  name: string;
  id: number;
  images: string[];
}

export interface Info {
  age: string;
  village: string;
  rank: string[];
  notable_jutsu: string[];
}
