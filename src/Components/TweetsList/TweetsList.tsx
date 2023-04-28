import { FC, useEffect, useState } from "react";
import TweetCard from "../ui/TweetCard/TweetCard";
import { getUsers } from "../../service/api";
import { IUser } from "../../types/userType";
import MainButton from "../ui/MainButton/MainButton";
import { ButtonWrapper, ErrorMesage, List } from "./TweetsList.styled";
import { useLocalStorage } from "../../assets/hooks";
import DropDown from "../ui/DropDown/DropDown";

const TweetsList: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [userFollowings, setUserFollowings] = useLocalStorage<string[]>(
    "userFollowings",
    []
  );
  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    const handleData = async () => {
      const { data } = await getUsers(page, 3);
      if (!data.length) {
        setIsEmpty(true);
      } else {
        setUsers([...users, ...data]);
        setIsLoading(false);
      }
    };
    if (isLoading) handleData();
  }, [page, users, isLoading]);

  const handleLoadMoreButton = (): void => {
    setIsLoading(true);
    setPage((prevPage) => prevPage + 1);
  };

  const handleFilterList = (): IUser[] => {
    switch (filter) {
      case "Follow":
        return users.filter((user) => !userFollowings.includes(user.id));
      case "Following":
        return users.filter((user) => userFollowings.includes(user.id));
      default:
        return users;
    }
  };

  const handleDropDownValue = async (value: string) => {
    setFilter(value);
    if (value !== "Options") {
      const { data } = await getUsers();
      setUsers([...data]);
      setIsEmpty(true);
      setIsLoading(false);
    }
  };

  return (
    <>
      <DropDown getValue={handleDropDownValue} />
      <List>
        {handleFilterList().map((user: IUser) => {
          const isFollowing = userFollowings.includes(user.id);
          return (
            <TweetCard
              key={user.id}
              {...user}
              isFollowing={isFollowing}
              userFollowings={userFollowings}
              setUserFollowings={setUserFollowings}
            />
          );
        })}
      </List>
      {isEmpty ? (
        !filter && <ErrorMesage>Sorry, no more cards were found.</ErrorMesage>
      ) : (
        <ButtonWrapper>
          <MainButton
            title="Load more"
            func={handleLoadMoreButton}
            isLoading={isLoading}
          />
        </ButtonWrapper>
      )}
      {!handleFilterList().length && !isLoading && (
        <ErrorMesage>{`Sorry, your ${filter.toLowerCase()} list is empty.`}</ErrorMesage>
      )}
    </>
  );
};

export default TweetsList;
