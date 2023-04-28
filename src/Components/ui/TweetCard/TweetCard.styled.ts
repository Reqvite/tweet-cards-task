import styled from "styled-components";
import { ReactComponent as LogoSvg } from "../../../assets/icons/Logo.svg";
import { ReactComponent as UserSvg } from "../../../assets/icons/Hansel.svg";

export const Box = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

export const Line = styled.div`
  position: absolute;
  top: 214px;
  left: 0;
  height: 8px;
  width: 100%;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const Circle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  border: 9px solid #ebd8ff;
  background: ${(p) => p.theme.colors.boxBgColor};
  border-radius: 50%;
`;

export const UserImg = styled.img`
  border-radius: 50%;
`;

export const UserImgPreview = styled(UserSvg)``;

export const TweetDescBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.span`
  display: block;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  :not(:first-child) {
    margin-top: 16px;
  }
  text-transform: uppercase;
`;

export const ButtonWrapper = styled.div`
  margin-top: 24px;
`;
