import React from "react";
import styled from "styled-components";
const LeftSide = () => {
  return (
    <Container>
      <ArtCard>Card</ArtCard>
    </Container>
  );
};

const Container = styled.div`
  grid-area: leftSide;
`;

const ArtCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  transition: box-shadow 83ms;
  position: relative;
  border: none;
`;
export default LeftSide;
