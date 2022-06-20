import React from "react";
import styled from "styled-components";

const Login = (props) => {
  return (
    <Container>
      <Nav>
        <a href="#">
          <img src="/image logo/image.png" alt="image" />
        </a>
        <div>
          <Join>Join Now</Join>
        </div>
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

  & > a {
    @media (max-width: 768px) {
      padding: 0 10px;
    }
  }
  & > a img {
    width: 135px;
    height: 34px;
  }
`;

const Join = styled.a`
  font-size: 25px;
`;

export default Login;
