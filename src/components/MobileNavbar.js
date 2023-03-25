import React, { Component } from "react";
import { Link } from "react-router-dom";

// styled components
import styled from "styled-components";

// images
import wave from "../assets/img/wave.png";
import HomeIcon from "../assets/img/icon/Home.svg";
import SearchIcon from "../assets/img/icon/Search.svg";
import InfoIcon from "../assets/img/icon/Info.svg";

const NavbarContainer = styled.div`
  margin: 0 auto;
  max-width: 768px;
  padding: 1.7rem 0.5rem;
  font-size: 1.5rem;
  background: #f4f4f4;
  border-top: 1px solid #f2f2f2;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom: 0rem;
  right: 0rem;
  left: 0rem;
  a {
    color: #232323;
    cursor: pointer;
    text-decoration: none;
  }
  div {
    padding: 1rem;
    display: flex;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    transition: 0.3s all linear;
    &:hover {
      padding: 1rem;
      border-radius: 20px;
      background: #008ae6;
      a {
        color: #fff;
      }
    }
    img {
      width: 20%;
      margin-left: 0.2rem;
    }
  }
  @media screen and (min-width: 768px) {
    bottom: 2rem;
    border-radius: 50px;
  }
`;
const FixedShape = styled.div`
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  img {
    width: 100%;
    height: 200px;
  }
`;

class MobileNavbar extends Component {
  render() {
    return (
      <div>
        <FixedShape>
          <img src={wave} alt="wave shape" />
        </FixedShape>
        <NavbarContainer>
          <div>
            <img src={InfoIcon} alt="Search Icon" />
            <Link to="/projects/weatherapp/contact-us">تماس با ما</Link>
          </div>
          <div>
            <img src={SearchIcon} alt="Search Icon" />
            <Link to="/projects/weatherapp/search">جست و جو</Link>
          </div>
          <div>
            <img src={HomeIcon} alt="Home Icon" />
            <Link to="/projects/weatherapp/">صفحه اصلی</Link>
          </div>
        </NavbarContainer>
      </div>
    );
  }
}

export default MobileNavbar;
