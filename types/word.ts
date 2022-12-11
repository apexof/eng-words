export type TWord = {
  value: string;
  translate: string;
  tags: string[];
  complexity: number;
};
export type TWordsList = { [key: string]: TWord };
