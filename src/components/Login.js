import React from "react";
import styled from "styled-components";

const Login = (props) => {
  return (
    <Container>
      <Nav>
        <a href="#">
          <img src="/image logo/image.png" alt="image" />
        </a>
      </Nav>
    </Container>
  );
};

const Container = styled.div`
  padding: 0;
`;

const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;

  & > a img {
    width: 135px;
    height: 34px;
  }
`;

export default Login;
