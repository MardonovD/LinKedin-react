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
        <Nav>
          <NavListWrap>
            <NavList className="active">
              <a>
                <i className="home icon"></i>
              </a>
              <span>Home</span>
            </NavList>

            <NavList>
              <a>
                <i className="th list icon"></i>
              </a>
              <span>My Network</span>
            </NavList>

            <NavList>
              <a>
                <i className="shopping bag icon"></i>
              </a>
              <span>Jobs</span>
            </NavList>

            <NavList>
              <a>
                <i className="envelope outline icon"></i>
              </a>
              <span>Message</span>
            </NavList>

            <NavList>
              <a>
                <i className="bell icon"></i>
              </a>
              <span>Notification</span>
            </NavList>

            <User>
              <a>
                <img src="/image logo/myImage.jpg" alt="my image" />
                <div>
                  <span>Me</span>
                  <i className="sort down icon"></i>
                </div>
              </a>

              <SignOut>
                <a>Sign Out</a>
              </SignOut>
            </User>

            <Work>
              <i className="tty icon"></i>
              <div>
                <span>Work</span>
                <i className="sort down icon"></i>
              </div>
            </Work>
          </NavListWrap>
        </Nav>
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
  display: flex;
  align-items: center;
  margin-right: 8px;
  & > a img {
    width: 40px;
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
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.9);
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      border-color: #dce6f1;
      vertical-align: text-top;
      /* margin-left: 50px; */
    }
  }
`;
const SearchIcon = styled.div`
  img {
    width: 35px;
    position: absolute;
    top: 1px;
    z-index: 1;
    left: 2px;
    pointer-events: none;
    display: flex;
    justify-content: center;

    align-items: center;
    transition: background-color 0.15s;
  }
`;

const Nav = styled.nav`
  margin-right: 60px;
  display: block;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: white;
    width: 100%;
  }
`;

const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style: none;

  .active a i {
    color: black;
  }

  .active {
    position: relative;
    span:after {
      content: "";
      transform: scale(1);
      border-bottom: 2px solid black;
      bottom: 0;
      left: 0;
      width: 100%;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      border-color: rgba(0, 0, 0, 0.9);
    }
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding: 0 40px;
  }
`;

const NavList = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;

  a {
    i {
      color: rgba(0, 0, 0, 0.6);

      &:hover,
      &:active {
        color: rgba(0, 0, 0, 0.9);
      }
    }

    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 25px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 42px;
    min-width: 80px;
    position: relative;
    text-decoration: none;

    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }
    @media (max-width: 768px) {
      min-height: 60px;
    }
  }
  &:hover,
  &:active {
    span {
      color: rgba(0, 0, 0, 0.9);
      cursor: pointer;
    }
  }
`;

const User = styled(NavList)`
  a {
    margin-top: 5px;
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
    div {
      display: flex;
      /* gap: 5px; */
      align-items: center;
      justify-content: center;
      i {
        font-size: 18px;
      }
      span {
        font-size: 18px;
      }
    }
    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }


  }

  &:hover{
    ${SignOut}{
      
    }
  }
`;
const Work = styled(User)`
  padding-left: 10px;
  margin-top: 13px;
  div i {
    font-size: 18px;
  }
  i {
    font-size: 25px;
  }
  border-left: 1px solid rgba(0, 0, 0, 0.2);
`;

const SignOut = styled.div`
  a {
    font-size: 18px;
    text-decoration: none;
    color: black;
  }
  width: 100px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 65px;
  background: white;
  border-radius: 5px;
  display: none;
`;

export default Header;
