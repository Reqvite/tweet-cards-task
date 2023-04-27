import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(1, minmax(200px, 1fr));
  grid-gap: 10px;

  @media (min-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const ErrorMesage = styled.div`
  margin-top: 10px;
  color: ${(p) => p.theme.colors.secondaryTextColor};
  text-align: center;
`;
