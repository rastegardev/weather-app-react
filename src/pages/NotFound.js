import React, { Component } from "react";

import styled from "styled-components";

// images
import error from "../assets/img/404.gif";

const NotFoundContainer = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  padding: 10px 20px;
  text-align: center;
  border-radius: 20px;
  @media screen and (max-width: 768px) {
    height: 80vh;
  }
  img {
    width: 100%;
  }
`;

class NotFound extends Component {
  render() {
    return (
      <NotFoundContainer>
        <h1>ارور 404 صفحه پیدا نشد</h1>
        <img src={error} alt="404 gif" />
      </NotFoundContainer>
    );
  }
}

export default NotFound;
