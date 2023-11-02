export interface ITheme {
  primary:string,
  primaryBg: string;
  secondaryBg: string;
  addBtnBg: string;
  primaryText: string;
  error: string;
}

export type IColor = "primaryText" | "secondaryText" | "error";

export type ITextAlign = "left" | "center" | "right";

export interface ITypographyProps {
  textAlign?: ITextAlign;
  fontSize?: string;
  color?: IColor;
}
