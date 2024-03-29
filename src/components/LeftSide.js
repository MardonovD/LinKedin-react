import React from "react";
import styled from "styled-components";
const LeftSide = () => {
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground />
          <a>
            <Photo />
            <Link>Welcome , there!</Link>
          </a>
          <a>
            <AddPhotoText>Add photo text</AddPhotoText>
          </a>
        </UserInfo>
      </ArtCard>
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
  box-shadow: 0 0 0 1px rgb(0 0 0 /15%), 0 0 0 rgb(0 0 0 /20%);
`;

const UserInfo = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 12px 16px;
  word-wrap: break-word;
  word-break: break-word;
`;

const CardBackground = styled.div`
  background: url("/image logo/image.png");
  background-position: center;
  background-size: 462px;
  height: 54px;
  margin: -12px -12px 0;
`;
const Photo = styled.div`
  box-shadow: none;
  background-image: url("/image logo/myImage.jpg");
  width: 72px;
  height: 72px;
  background-position: center;
  background-size: 80%;
  background-color: white;
  box-sizing: border-box;
  background-repeat: no-repeat;
  border: 2px solid white;
  margin: -38px auto 12px;
  border-radius: 50%;
  background-clip: content-box;
`;
const Link = styled.div``;
const AddPhotoText = styled.div``;
export default LeftSide;
