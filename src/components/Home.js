import React from "react";
import styled from "styled-components";
import Header from "./Header";
import LeftSide from "./LeftSide";
import Main from "./Main";
import RoghtSide from "./RoghtSide";
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
      <Layout>
        <LeftSide />
      </Layout>
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

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0;
  }
`;

const Layout = styled.div`
  /* width: 100%; */
  display: grid;
  grid-template-areas: " leftSide  middleside RightSide";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  column-gap: 25px;
  row-gap: 25px;
  grid-template-rows: auto;
  margin: 25px 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 10px;
  }
`;

export default Home;
