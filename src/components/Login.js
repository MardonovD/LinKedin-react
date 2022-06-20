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
      <Section>
        <Hero>
          <h1>Welcome to your professional community</h1>
          <img src="/image logo/ofice.png" alt="image office" />
        </Hero>
        <Form>
          <Google>
            <img src="/image logo/google.png" alt="image google" />
            Sign in with Google
          </Google>
        </Form>
      </Section>
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
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    cursor: pointer;
    color: #0a66c2;
    text-decoration: none;
  }
`;

const Section = styled.section`
  display: flex;
  align-content: start;
  min-height: 700px;
  padding-bottom: 138px;
  padding-top: 40px;
  padding: 60px;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  align-items: center;
  margin: auto;
  @media (min-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;

const Hero = styled.div`
  width: 100%;
  position: relative;
  h1 {
    padding-bottom: 0;
    width: 55%;
    font-size: 56px;
    color: #2977c9;
    font-weight: 200;
    line-height: 70px;
    @media (max-width: 768px) {
      font-size: 20px;
      text-align: center;
      width: 100%;
      line-height: 2;
    }
  }

  img {
    /* z-index: -1; */
    border-radius: 50%;
    width: 500px;
    height: 572px;
    position: absolute;
    /* bottom: -100px; */
    top: -10px;
    right: -30px;
    @media (max-width: 768px) {
      top: 50px;
      position: initial;
      height: initial;
    }
  }
`;

const Form = styled.div`
  width: 400px;

  margin-top: 100px;

  @media (max-width: 768px) {
  }
`;
const Google = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  img {
    width: 30px;
    height: 30px;
  }
`;
export default Login;
