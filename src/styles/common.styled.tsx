import styled from "styled-components";
import { ITypographyProps } from "../types/theme";

export const Typography = styled.p<ITypographyProps>`
  color: ${({ theme }) => theme.themeText};
  font-size: ${({ fontSize }) => fontSize};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "center")};
`;
