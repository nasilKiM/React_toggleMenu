import { Outlet } from "react-router";
import { styled } from "styled-components";
import Sidebar from "../Sidebar";

const Layout = () => {
  return (
    <Wrapper>
      <Sidebar />
      <Outlet />
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  background-color: black;
`;
