import React, { Component } from "react";
import { Link } from "react-router-dom";

// styled components
import styled from "styled-components";

// images
import HomeIcon from "../assets/img/icon/Home.svg";
import SearchIcon from "../assets/img/icon/Search.svg";
import InfoIcon from "../assets/img/icon/Info.svg";

const NavbarContainer = styled.div`
  margin: 0 auto;
  max-width: 768px;
  padding: 1.7rem 0.5rem;
  border-top: 1px solid #f2f2f2;
  font-size: 1.5rem;
  background: #f4f4f4;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  bottom: 0rem;
  right: 0rem;
  left: 0rem;
  box-shadow: 0px 5px 10px -3px rgba(0, 0, 0, 0.1);
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
      background: #feb248;
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

class MobileNavbar extends Component {
  render() {
    return (
      <div>
        <NavbarContainer>
          <div>
            <Link to="/projects/weatherapp/">صفحه اصلی</Link>
            <img src={HomeIcon} alt="Home Icon" />
          </div>
          <div>
            <Link to="/projects/weatherapp/search">جست و جو</Link>
            <img src={SearchIcon} alt="Search Icon" />
          </div>
          <div>
            <Link to="/projects/weatherapp/contact-us">تماس با ما</Link>
            <img src={InfoIcon} alt="Search Icon" />
          </div>
        </NavbarContainer>
      </div>
    );
  }
}

export default MobileNavbar;
