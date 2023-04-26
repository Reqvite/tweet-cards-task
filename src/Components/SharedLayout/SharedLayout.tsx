import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { Container } from "./SharedLayout.styled";

const SharedLayout: FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default SharedLayout;
