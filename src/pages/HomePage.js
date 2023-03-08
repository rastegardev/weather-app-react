import React, { Component } from "react";
import { Link } from "react-router-dom";

// styled components
import styled from "styled-components";

// images
import animationRain from "../assets/img/animation-rain.gif";

const HomePageContainer = styled.div`
  height: 90vh;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(2, 1fr);
  img {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    height: 80vh;
    grid-template-columns: repeat(1, 1fr);
  }
`;
const HomePageTitle = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: center;
  h1 {
    text-align: right;
  }
  a {
    color: #fff;
    cursor: pointer;
    font-size: 1.5rem;
    padding: 1rem 2rem;
    margin-top: 1.5rem;
    background: #feb248;
    border-radius: 20px;
    text-decoration: none;
  }
`;

class HomePage extends Component {
  render() {
    return (
      <HomePageContainer>
        <HomePageTitle>
          <h1>اپلیکیشن آب و هوا</h1>
          <Link to="/projects/weatherapp/search">جست و جو بین شهرها</Link>
        </HomePageTitle>
        <div>
          <img src={animationRain} alt="Weather App photo" />
        </div>
      </HomePageContainer>
    );
  }
}

export default HomePage;
