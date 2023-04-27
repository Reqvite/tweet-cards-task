import styled, { css } from "styled-components";

export const DropDownBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
  padding: 15px;

  width: 150px;
  height: 60px;

  background: ${(p) => p.theme.colors.boxBgColor};
  border-radius: 10px;
  cursor: pointer;
`;

export const Title = styled.span`
  font-weight: 600;
  font-size: 20px;
`;

export const List = styled.ul`
  position: absolute;
  top: 64px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  z-index: 2;
  width: 130px;
  padding: 10px;

  background-color: ${(p) => p.theme.colors.dropDownBgColor};
  border-radius: 10px;
`;

export const ListItem = styled.li`
  position: relative;
  :not(:first-child) {
    margin-top: 10px;
  }
`;

export const ListItemText = styled.span<{ isActive: boolean }>`
  display: block;
  font-weight: 700;
  font-size: 14px;

  ${(p) =>
    p.isActive &&
    css`
      color: ${(p) => p.theme.colors.accentColor};
    `}

  :hover,:focus {
    color: ${(p) => p.theme.colors.accentColor};
  }
`;
