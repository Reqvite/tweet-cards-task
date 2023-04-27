import styled, { css } from "styled-components";

export const StyledMainButton = styled.button<{
  isFollowing?: boolean | undefined;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  width: 196px;
  height: 50px;

  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;

  text-transform: uppercase;

  color: ${(p) => p.theme.colors.secondaryTextColor};

  background-color: ${(p) => p.theme.colors.buttonBgColor};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  cursor: pointer;
  border: none;

  :hover,
  :focus {
    transform: scale(1.02);
  }

  ${(p) =>
    p.isFollowing &&
    css`
      background-color: ${(p) => p.theme.colors.accentColor};
    `}
`;
