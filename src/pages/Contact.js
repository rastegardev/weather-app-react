import React, { Component } from "react";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

// styled components
import styled from "styled-components";

// images
import Communication from "../assets/img/communication.png";

const ContactContainer = styled.div`
  height: 90vh;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(2, 1fr);
  img {
    width: 100%;
    animation: Up-and-down-animations 3s linear infinite;
  }
  @keyframes Up-and-down-animations {
    0% {
      transform: translateY(0px);
    }
    25% {
      transform: translateY(5px);
    }
    50% {
      transform: translateY(10px);
    }
    75% {
      transform: translateY(5px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  @media screen and (max-width: 768px) {
    height: 80vh;
    grid-template-columns: repeat(1, 1fr);
  }
`;
const ContactTitle = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  h1 {
    text-align: right;
  }
  button {
    color: #fff;
    cursor: pointer;
    font-size: 1.5rem;
    padding: 1rem 2rem;
    margin-top: 1.5rem;
    background: #008ae6;
    border-radius: 20px;
    text-decoration: none;
    border: none;
    outline: none;
  }
`;

class Contact extends Component {
  componentDidMount() {
    AOS.init();
  }

  render() {
    return (
      <ContactContainer>
        <div>
          <img src={Communication} alt="Weather App photo" />
        </div>
        <ContactTitle
          data-aos="fade-left"
          data-aos-offset="10"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <h1>تماس با ما</h1>
          <p>
            جهت دانلود سورس کد این پروژه در گیت هاب{" "}
            <a href="https://github.com/rastegardev/weather-app-react">اینجا</a>{" "}
            کلیک کنید
          </p>
          <a href="https://rezarastegar.ir">
            <button>رفتن به وبسایت</button>
          </a>
        </ContactTitle>
      </ContactContainer>
    );
  }
}

export default Contact;
