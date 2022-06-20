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
          <SignIn>Sign in </SignIn>
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
  padding: 10px 15px;
  text-decoration: none;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`;

const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  transition-duration: 200ms;
  font-weight: 600;
  font-size: 25px;
  padding: 10px 24px;
`;

export default Login;
