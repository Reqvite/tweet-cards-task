import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledHeader = styled.header`
  position: fixed;
  z-index: 999;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 93px;
  border-radius: 0 0 5px 5px;
  background: ${(p) => p.theme.colors.headerBgColor};

  backdrop-filter: blur(5px);
  padding: 10px;
`;

export const List = styled.ul`
  display: flex;
`;

export const ListItem = styled.li`
  :not(:first-child) {
    margin-left: 10px;
  }
`;

export const Link = styled(NavLink)`
  color: ${(p) => p.theme.colors.mainTextColor};
  display: block;
  font-weight: 600;
  text-decoration: none;
  font-size: 18px;
  line-height: 1;

  :hover,
  :focus {
    text-decoration: underline;
  }
  &.active {
    color: ${(p) => p.theme.colors.accentColor};
  }
`;
