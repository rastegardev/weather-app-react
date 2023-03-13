import React, { useRef, useState, useEffect } from "react";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

// axios
import axios from "axios";

// styled components
import styled from "styled-components";

// react hot toast
import toast, { Toaster } from "react-hot-toast";

// images
import loadingGif from "../assets/img/loading.gif";

const SearchContainer = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 768px) {
    height: 80vh;
  }
`;
const SearchTitle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
const SearchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    width: 100%;
    border: none;
    outline: none;
    text-align: center;
    font-size: 1.5rem;
    border: 1px solid #f4f4f4;
    padding: 1.5rem 2.5rem;
    margin-top: 1.5rem;
    border-radius: 50px;
    box-shadow: 0px 5px 10px -3px rgba(0, 0, 0, 0.1);
    @media screen and (max-width: 768px) {
      padding: 1rem 2rem;
    }
  }
  button {
    width: 35%;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 1.5rem;
    padding: 1.5rem 2.5rem;
    margin-top: 1.5rem;
    margin-right: 1rem;
    background: #008AE6;
    border-radius: 50px;
    box-shadow: 0px 5px 10px -3px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      margin-left: 5px;
    }
    @media screen and (max-width: 768px) {
      width: 70%;
    }
    img {
      width: 1.5rem;
    }
    @media screen and (max-width: 768px) {
      padding: 1rem 2rem;
    }
  }
`;
const SearchData = styled.div`
  margin-top: 1.5rem;
  padding: 3rem 2rem;
  background: #f4f4f4;
  border-radius: 20px;
  box-shadow: 0px 5px 10px -3px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  .temp {
    font-weight: 700;
    font-size: 5rem;
  }
  @media screen and (max-width: 768px) {
    .temp {
      font-size: 4rem;
    }
  }
`;

const apiKey = "75b9ff91c1c9b1d204bc50b6ee7bccda";

const Search = () => {
  const inputRef = useRef("");
  const [apiData, setApiData] = useState("");
  const [spinner, setSpinner] = useState(false);

  const searchCity = async () => {
    setSpinner(true);
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputRef.current.value}&units=metric&appid=${apiKey}`;
    axios
      .get(URL)
      .then((data) => {
        SuccessNotify();
        setApiData(data);
        setSpinner(false);
        {
          inputRef.current.value = "";
        }
      })
      .catch((err) => {
        ErrorNotify();
        setSpinner(false);
        {
          inputRef.current.value = "";
        }
      });
  };

  // Success
  const SuccessNotify = () =>
    toast.success(`اطلاعات آب و هوای شهر ${inputRef.current.value} پیدا شد`);
  // Error
  const ErrorNotify = () =>
    toast.error(`شهر ${inputRef.current.value} پیدا نشد مجدد تلاش کنید`);

  // Date Builder
  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  useEffect(() => {
    AOS.init();
  });

  return (
    <SearchContainer>
      <SearchTitle>
        <h2>نام شهر خود را وارد کنید</h2>
      </SearchTitle>
      <SearchBox className="search-box">
        <input
          type="text"
          className="search-bar"
          placeholder="نام شهر به انگلیسی"
          ref={inputRef}
        />
        <button onClick={searchCity}>
          {spinner ? (
            <>
              <img src={loadingGif} alt="loading gif" /> جست و جو
            </>
          ) : (
            "پیدا کن"
          )}
        </button>
      </SearchBox>

      {apiData && (
        <SearchData
          data-aos="zoom-in"
          data-aos-offset="10"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <div>
            <p>{apiData.data.weather[0].main}</p>
            <h3>{`${apiData.data.name}, ${apiData.data.sys.country}`}</h3>
            <p>{dateBuilder(new Date())}</p>
          </div>
          <p className="temp">{Math.round(apiData.data.main.temp)}°c</p>
        </SearchData>
      )}

      <Toaster
        toastOptions={{
          style: {
            border: "1px solid #f4f4f4",
            fontFamily: "YekanBakh",
            fontSize: "1.5rem",
          },
        }}
      />
    </SearchContainer>
  );
};

export default Search;
