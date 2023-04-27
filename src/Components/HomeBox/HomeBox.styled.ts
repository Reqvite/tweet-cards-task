import styled from "styled-components";
import { Link } from "../Header/Header.styled";

export const Box = styled.div`
  margin-top: 50%;
  width: 100%;
  max-width: 500px;
  background: ${(p) => p.theme.colors.boxBgColor};
  border-radius: 5px;
  padding: 20px;
`;

export const Heading = styled.h1`
  text-align: center;
`;

export const StyledLink = styled(Link)`
  margin-top: 10px;
  text-align: center;
  text-decoration: underline;

  :hover,
  :focus {
    color: ${(p) => p.theme.colors.accentColor};
  }
`;
