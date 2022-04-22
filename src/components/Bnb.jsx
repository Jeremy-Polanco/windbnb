import React from "react";
import styled from "styled-components";

const bnb = ({
  city,
  country,
  superHost,
  title,
  rating,
  maxGuest,
  type,
  beds,
  photo,
}) => {
  return (
    <Bnb>
      <img src={photo} alt="b&b" className="img" />
      <div className="bnb-info">
        <div className="border-box">
          {superHost && <p className="host">super host</p>}
          <span>{type}</span>
        </div>
        <div className="rating">
          <i className="fas fa-star"></i> <span>{rating}</span>
        </div>
      </div>
      <p className="bnb-description">{title}</p>
    </Bnb>
  );
};

const Bnb = styled.div`
  width: 24.6875em;
  font-family: "Montserrat";
  &:hover {
    width: 25.6875em;
  }
  .img {
    border-radius: 1.5em;
    max-height: 16.5em;
  }

  .bnb-info {
    margin-top: 1.3125em;
    display: flex;
    justify-content: space-between;

    .border-box {
      display: flex;
      gap: 0.7em;
      justify-content: center;
      align-items: center;
    }
    .host {
      font-size: 0.7rem;
      font-weight: 700;
      text-transform: uppercase;
      color: #4f4f4f;
      margin: 0;
      padding: 0 0.625em;
      border: 1px solid #4f4f4f;
      border-radius: 0.8em;
      line-height: 15px;
      text-align: center;
    }
    span {
      font-size: 0.8rem;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 500;
      color: #828282;
    }
    i {
      width: 1rem;
      height: 1rem;
      color: #eb5757;
    }
    .rating {
      font-size: 0.85rem;
      gap: 0.5em;
    }
  }
  .bnb-description {
    font-weight: 600;
    font-size: 1rem;
    color: #333333;
    margin-top: 0;
  }
`;

export default bnb;
