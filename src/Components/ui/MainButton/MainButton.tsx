import { FC } from "react";
import { StyledMainButton } from "./MainButton.styled";

interface ButtonProps {
  title: string;
  func?: () => void;
  isLoading?: boolean;
  isFollowing?: boolean;
}

const MainButton: FC<ButtonProps> = ({
  title,
  func,
  isLoading,
  isFollowing,
}) => {
  return (
    <StyledMainButton
      disabled={isLoading}
      onClick={func}
      isFollowing={isFollowing}
    >
      {isLoading ? "Loading..." : title}
    </StyledMainButton>
  );
};

export default MainButton;
