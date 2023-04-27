import { FC, useState, useEffect } from "react";
import {
  DropDownBox,
  List,
  ListItem,
  ListItemText,
  Title,
} from "./DropDown.styled";

interface IDropDownProps {
  getValue: (value: string) => void;
}

const DropDown: FC<IDropDownProps> = ({ getValue }) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [activeValue, setActiveValue] = useState("All");
  const [values] = useState([
    { value: "All", id: 1 },
    { value: "Follow", id: 2 },
    { value: "Following", id: 3 },
  ]);

  useEffect(() => {
    getValue("All");
  }, [getValue]);

  const handleDropDown = () => {
    setIsActive(!isActive);
  };

  const handleDropList = (value: string): void => {
    setActiveValue(value);
    getValue(value);
  };

  return (
    <DropDownBox onClick={handleDropDown}>
      <Title>{activeValue}</Title>
      {isActive && (
        <List>
          {values.map(({ value, id }) => (
            <ListItem key={id} onClick={() => handleDropList(value)}>
              <ListItemText isActive={value === activeValue}>
                {value}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      )}
    </DropDownBox>
  );
};

export default DropDown;
