import { FC, useState } from "react";
import {
  Box,
  ButtonWrapper,
  Circle,
  Img,
  Line,
  Logo,
  Text,
  TweetDescBox,
  UserBox,
  UserImg,
  UserImgPreview,
} from "./TweetCard.styled";
import CardImage from "../../../assets/card-image.png";
import MainButton from "../MainButton/MainButton";
import { IUser } from "../../../types/userType";

interface ITweetCardProps extends IUser {
  isFollowing: boolean;
  userFollowings: string[];
  setUserFollowings: React.Dispatch<React.SetStateAction<string[]>>;
}

const TweetCard: FC<ITweetCardProps> = ({
  user,
  avatar,
  tweets,
  followers,
  id,
  isFollowing,
  userFollowings,
  setUserFollowings,
}) => {
  const [numberOfFollowers, setNumberOfFollowers] = useState<number>(
    isFollowing ? followers + 1 : followers
  );

  const handleFollowingButton = (): void => {
    if (!isFollowing) {
      setNumberOfFollowers((prevNumber) => prevNumber + 1);
      setUserFollowings([...userFollowings, id]);
    } else {
      setNumberOfFollowers((prevNumber) => prevNumber - 1);
      const newUserFollowingList = userFollowings.filter(
        (el: string) => el !== id
      );
      setUserFollowings([...newUserFollowingList]);
    }
  };

  return (
    <Box>
      <Logo />
      <Img src={CardImage} alt="Tweet image" />
      <Line>
        <Circle>
          {avatar ? <UserImg src={avatar} alt={user} /> : <UserImgPreview />}
        </Circle>
      </Line>
      <TweetDescBox>
        <Text>{tweets} Tweets</Text>
        <Text>{numberOfFollowers.toLocaleString()} Followers</Text>
        <ButtonWrapper>
          <MainButton
            title={isFollowing ? "Following" : "Follow"}
            func={handleFollowingButton}
            isFollowing={isFollowing}
          />
        </ButtonWrapper>
      </TweetDescBox>
    </Box>
  );
};

export default TweetCard;
