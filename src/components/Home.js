import React from "react";
import styled from "styled-components";
import Header from "./Header";

const Home = () => {
  return (
    <Container>
      <Section>
        <h5>
          <a href="#"> Hiring in a hurry? -</a>
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
const Section = styled.section``;

export default Home;
