import { FC } from "react";
import { Box, Img, Logo } from "./TweetCard.styled";
import CardImage from "../../../assets/card-image.png";

const TweetCard: FC = () => {
  return (
    <Box>
      <Logo />
      <Img src={CardImage} alt="Tweet image" />
    </Box>
  );
};

export default TweetCard;
