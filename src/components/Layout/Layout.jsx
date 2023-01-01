import React from "react";
import styled from "styled-components";

function Layout(props) {
  return <StLayout className="layout">{props.children}</StLayout>;
}

export default Layout;

const StLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1280px;
  margin: 0 auto;
  height: 100vh;
  background-color: pink;
`;
