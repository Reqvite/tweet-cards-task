import { FC } from "react";
import { Box, Heading, StyledLink } from "./HomeBox.styled";

const HomeBox: FC = () => {
  return (
    <Box>
      <Heading>Welcome to the Tweets Page!</Heading>
      <StyledLink to="tweets">
        Explore the world of tweets with our customized theme.
      </StyledLink>
    </Box>
  );
};

export default HomeBox;
