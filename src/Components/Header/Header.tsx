import { FC } from "react";
import { Link, StyledHeader, List, ListItem } from "./Header.styled";

const Header: FC = () => {
  return (
    <StyledHeader>
      <nav>
        <List>
          <ListItem>
            <Link to="/">Home</Link>
          </ListItem>
          <ListItem>
            <Link to="/tweets">Tweets</Link>
          </ListItem>
        </List>
      </nav>
    </StyledHeader>
  );
};

export default Header;
