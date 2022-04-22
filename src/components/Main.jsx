import React from "react";
import styled from "styled-components";
import data from "../stays.json";
import Bnb from "./Bnb";
const main = ({ bnbData, setBnbData }) => {
  if (bnbData == false) {
    return (
      <Main>
        <div className="main-title">
          <h1>No stays found with given parameters</h1>
        </div>
      </Main>
    );
  } else
    return (
      <Main>
        <div className="main-title">
          <h1>Stays in Finland</h1>
          <p>12+ days</p>
        </div>
        <div className="bnb-container">
          {bnbData.slice(0, 6).map((item, index) => {
            const {
              city,
              country,
              superHost,
              title,
              rating,
              maxGuest,
              type,
              beds,
              photo,
            } = item;
            return (
              <Bnb
                city={city}
                country={country}
                superHost={superHost}
                title={title}
                rating={rating}
                maxGuest={maxGuest}
                type={type}
                beds={beds}
                photo={photo}
                key={index}
              ></Bnb>
            );
          })}
        </div>
      </Main>
    );
};

const Main = styled.main`
  margin-top: 5.3125em;
  min-width: 23.25em;
  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #4f4f4f;
  }
  .main-title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      font-size: 0.9rem;
      color: #4f4f4f;
      padding: 0;
      margin: 0;
      position: relative;
      margin-bottom: auto;
    }
  }
  .bnb-container {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 2em;
    @media (max-width: 929px) {
      grid-template-columns: none;
      justify-content: center;
    }
    @media (min-width: 930px) and (max-width: 1348px) {
      grid-template-columns: auto auto;
    }
  }
`;

export default main;
