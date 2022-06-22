import React from "react";
import styled from "styled-components";
import Header from "./Header";

const Home = () => {
  return (
    <Container>
      <Section>
        <h5>
          <a> Hiring in a hurry? -</a>
        </h5>
        <p>
          Find talented pros in record time with Upwork and keep business moving
        </p>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 70px;
  max-width: 100%;
`;

const Section = styled.section`
  min-height: 50px;
  padding: 16px 0;
  text-align: center;
  text-decoration: underline;
  display: flex;
  justify-content: center;
  h5 {
    color: #0a66c2;
    font-size: 14px;
    a {
      font-weight: 700;
    }
  }
  p {
    font-weight: 700;
    font-size: 14px;
    color: #434649;
  }
`;

export default Home;
