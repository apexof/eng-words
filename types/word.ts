export type TWord = {
  value: string;
  translate: string;
  tags: string[];
  сomplexity: number;
};
export type TWordsList = { [key: string]: TWord };
