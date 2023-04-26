import styled from "styled-components";
import { ReactComponent as LogoSvg } from "../../../assets/icons/Logo.svg";

export const Box = styled.div`
  position: relative;
  width: 100%;
  max-width: 380px;
  height: 460px;
  padding: 28px 36px 36px 36px;

  background: ${(p) => p.theme.colors.boxBgColor};
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const Logo = styled(LogoSvg)`
  position: absolute;
`;

export const Img = styled.img`
  padding-top: 8px;
`;
