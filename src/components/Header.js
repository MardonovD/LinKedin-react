import React from "react";
import styled from "styled-components";
const Header = () => {
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img src="/image logo/linkedin.png" alt="image logo" />
          </a>
        </Logo>
        <Search>
          <div>
            <input type="text" alt="" placeholder="Search" />
          </div>
          <SearchIcon>
            <img src="/image logo/search.png" />
          </SearchIcon>
        </Search>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  left: 0;
  padding: 0 24px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
`;

const Logo = styled.span`
  margin-right: 8px;
  & > a img {
    width: 50px;
    height: auto;
  }
  font-size: 0px;
`;

const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  & > div {
    max-width: 280px;
    input {
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
    }
  }
`;
const SearchIcon = styled.div`
  img {
    width: 20px;
  }
`;
export default Header;
