import { FC } from "react";
import TweetCard from "../ui/TweetCard/TweetCard";

const TweetsList: FC = () => {
  return (
    <ul>
      <li>
        <TweetCard />
      </li>
    </ul>
  );
};

export default TweetsList;
