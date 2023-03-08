import React, { Component } from "react";

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
  }
  @media screen and (max-width: 768px) {
    height: 80vh;
    grid-template-columns: repeat(1, 1fr);
  }
`;
const ContactTitle = styled.div`
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

class Contact extends Component {
  render() {
    return (
      <ContactContainer>
        <div>
          <img src={Communication} alt="Weather App photo" />
        </div>
        <ContactTitle>
          <h1>تماس با ما</h1>
          <a href="https://rezarastegar.ir">رفتن به وبسایت</a>
        </ContactTitle>
      </ContactContainer>
    );
  }
}

export default Contact;
