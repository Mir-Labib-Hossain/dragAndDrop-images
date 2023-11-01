export interface ITheme {
  primaryBg: string;
  secondaryBg: string;
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
