import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { SearchActiveStyle, SearchInactiveStyle } from "../util";
import data from "../stays.json";

const header = ({ isSearchActive, setIsSearchActive, bnbData, setBnbData }) => {
  const [showLocation, setShowLocation] = useState(false);
  const [showGuests, setShowGuest] = useState(false);
  const [city, setCity] = useState("");
  const [guest, setGuest] = useState(0);
  const [adultGuest, setAdultGuest] = useState(0);
  const [childGuest, setChildGuest] = useState(0);
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
  }, []);

  const filtersHandler = () => {
    if (city && guest) {
      const filteredLocationBnbData = data.filter((bnb) => bnb.city === city);

      setBnbData(() => {
        return filteredLocationBnbData.filter((bnb) => bnb.maxGuests >= guest);
      });
      return;
    }
    if (city) {
      setBnbData(data.filter((bnb) => bnb.city === city));
      return;
    }
    if (guest) {
      setBnbData(data.filter((bnb) => bnb.maxGuests >= guest));
    }
  };

  const decreaseAdultGuest = () => {
    if (adultGuest > 0) {
      setGuest((prevGuest) => prevGuest - 1);
      setAdultGuest((prevGuest) => prevGuest - 1);
    }
  };
  const increaseAdultGuest = () => {
    setGuest((prevState) => prevState + 1);
    setAdultGuest((prevState) => prevState + 1);
  };
  const decreaseChildGuest = () => {
    if (childGuest > 0) {
      setGuest((prevGuest) => prevGuest - 1);
      setChildGuest((prevGuest) => prevGuest - 1);
    }
  };
  const increaseChildGuest = () => {
    setGuest((prevState) => prevState + 1);
    setChildGuest((prevState) => prevState + 1);
  };

  const allLocations = [...new Set(data.map((item) => item.city))];

  if (size < 954) {
    return (
      <ThemeProvider
        theme={isSearchActive ? SearchActiveStyle : SearchInactiveStyle}
      >
        <Header>
          {isSearchActive ? (
            <div className="header-container">
              <div className="input-container">
                <div className="borders borders-query">
                  <button
                    className="btn location-btn"
                    onClick={() => {
                      setShowGuest(false);
                      setShowLocation(!showLocation);
                    }}
                  >
                    <span>location</span>
                    <br />
                    {city ? `${city}, Finland` : "Finland"}
                  </button>
                  <div className="vertical-line"></div>
                  <div
                    className="guest-btn btn hover-borders"
                    onClick={() => {
                      setShowLocation(false);
                      setShowGuest(!showGuests);
                    }}
                  >
                    <span
                      style={{
                        fontWeight: 800,
                        textTransform: "capitalize",
                        fontSize: "0.6rem",
                      }}
                    >
                      Add guest
                    </span>
                    <p
                      className="guest"
                      onClick={() => {
                        setShowLocation(false);
                        setShowGuest(!showGuests);
                      }}
                    >{`${guest} guest`}</p>
                  </div>
                  <div className="vertical-line"></div>
                  <span className="search-icon">
                    <button
                      className="search-btn btn "
                      onClick={() => {
                        setIsSearchActive(!isSearchActive);
                        setShowLocation(false);
                        filtersHandler();
                      }}
                    >
                      <i
                        className="fas fa-search"
                        id="icon"
                        style={{
                          color: "#F2F2F2",
                          margin: "0 auto",
                          marginRight: "0.675em",
                        }}
                      ></i>
                      search
                    </button>
                  </span>
                </div>
              </div>
              {showGuests && (
                <div className="guest-btn-container smaller-screen">
                  <p className="type-guest">Adults</p>
                  <p className="age-guest">Age 13 or above</p>
                  <div className="guest-change-btn">
                    <div
                      className="btn decrease"
                      onClick={() => {
                        decreaseAdultGuest();
                      }}
                    >
                      <i className="fas fa-minus"></i>
                    </div>
                    {adultGuest}
                    <div
                      className="btn increase"
                      onClick={() => increaseAdultGuest()}
                    >
                      <i className="fa-solid fa-plus"></i>
                    </div>
                  </div>
                  <p className="type-guest">Children</p>
                  <p className="age-guest" style={{ width: "none" }}>
                    Age 2 to 12
                  </p>
                  <div className="guest-change-btn">
                    <div
                      className="btn decrease"
                      onClick={() => decreaseChildGuest()}
                    >
                      <i className="fas fa-minus"></i>
                    </div>
                    {childGuest}
                    <div
                      className="btn increase"
                      onClick={() => increaseChildGuest()}
                    >
                      <i className="fa-solid fa-plus"></i>
                    </div>
                  </div>
                </div>
              )}
              <div className="location-container">
                {showLocation && (
                  <ul>
                    {allLocations.map((city, index) => {
                      return (
                        <div
                          className="location"
                          key={index}
                          onClick={() => {
                            setCity(city);
                          }}
                        >
                          <i className="fa-solid fa-location-dot"></i>
                          <li className="location-item">{city}, Finland</li>
                        </div>
                      );
                    })}
                  </ul>
                )}
              </div>
            </div>
          ) : (
            <>
              <img className="logo" src="src/images/logo.png" alt="" />
              <div className="input-container">
                <div
                  className="borders"
                  onClick={() => setIsSearchActive(!isSearchActive)}
                >
                  <p> {city ? `${city}, Finland` : "Finland"}</p>
                  <div className="vertical-line"></div>
                  <button className="guest-btn btn">Add guest</button>
                  <div className="vertical-line"></div>
                  <i
                    className="fas fa-search"
                    id="icon"
                    style={{
                      color: "#EB5757",
                      position: "relative",
                      left: "13px",
                    }}
                  ></i>
                </div>
              </div>
            </>
          )}
        </Header>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider
      theme={isSearchActive ? SearchActiveStyle : SearchInactiveStyle}
    >
      <Header>
        {isSearchActive ? (
          <div className="header-container">
            <div className="input-container">
              <div className="borders borders-query">
                <button
                  className="btn location-btn"
                  onClick={() => {
                    setShowGuest(false);
                    setShowLocation(!showLocation);
                  }}
                >
                  <span>location</span>
                  <br />
                  {city ? `${city}, Finland` : "Finland"}
                </button>
                <div className="vertical-line"></div>
                <div className="guest-btn btn hover-borders">
                  <span
                    style={{
                      fontWeight: 800,
                      textTransform: "capitalize",
                      fontSize: "0.6rem",
                    }}
                    onClick={() => {
                      setShowLocation(false);
                      setShowGuest(!showGuests);
                    }}
                  >
                    Add guest
                  </span>
                  <p
                    className="guest"
                    onClick={() => {
                      setShowLocation(false);
                      setShowGuest(!showGuests);
                    }}
                  >{`${guest} guest`}</p>
                  {showGuests && (
                    <div className="guest-btn-container">
                      <p className="type-guest">Adults</p>
                      <p className="age-guest">Age 13 or above</p>
                      <div className="guest-change-btn">
                        <div
                          className="btn decrease"
                          onClick={() => {
                            decreaseAdultGuest();
                          }}
                        >
                          <i className="fas fa-minus"></i>
                        </div>
                        {adultGuest}
                        <div
                          className="btn increase"
                          onClick={() => increaseAdultGuest()}
                        >
                          <i className="fa-solid fa-plus"></i>
                        </div>
                      </div>
                      <p className="type-guest">Children</p>
                      <p className="age-guest" style={{ width: "none" }}>
                        Age 2 to 12
                      </p>
                      <div className="guest-change-btn">
                        <div
                          className="btn decrease"
                          onClick={() => decreaseChildGuest()}
                        >
                          <i className="fas fa-minus"></i>
                        </div>
                        {childGuest}
                        <div
                          className="btn increase"
                          onClick={() => increaseChildGuest()}
                        >
                          <i className="fa-solid fa-plus"></i>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="vertical-line"></div>
                <span className="search-icon">
                  <button
                    className="search-btn btn "
                    onClick={() => {
                      setIsSearchActive(!isSearchActive);
                      setShowLocation(false);
                      filtersHandler();
                    }}
                  >
                    <i
                      className="fas fa-search"
                      id="icon"
                      style={{
                        color: "#F2F2F2",
                        margin: "0 auto",
                        marginRight: "0.675em",
                      }}
                    ></i>
                    search
                  </button>
                </span>
              </div>
            </div>
            <div className="location-container">
              {showLocation && (
                <ul>
                  {allLocations.map((city, index) => {
                    return (
                      <div
                        className="location"
                        key={index}
                        onClick={() => {
                          setCity(city);
                        }}
                      >
                        <i className="fa-solid fa-location-dot"></i>
                        <li className="location-item">{city}, Finland</li>
                      </div>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>
        ) : (
          <>
            <img className="logo" src="src/images/logo.png" alt="" />
            <div className="input-container">
              <div
                className="borders"
                onClick={() => setIsSearchActive(!isSearchActive)}
              >
                <p> {city ? `${city}, Finland` : "Finland"}</p>
                <div className="vertical-line"></div>
                <button className="guest-btn btn">Add guest</button>
                <div className="vertical-line"></div>
                <i
                  className="fas fa-search"
                  id="icon"
                  style={{
                    color: "#EB5757",
                    position: "relative",
                    left: "13px",
                  }}
                ></i>
              </div>
            </div>
          </>
        )}
      </Header>
    </ThemeProvider>
  );
};

const Header = styled.header`
  min-height: ${(props) => props.theme.maxHeight};
  font-family: "Mulish", sans-serif;
  position: ${(props) => props.theme.position};
  height: ${(props) => props.theme.height};
  max-height: ${(props) => props.theme.maxHeight};
  width: ${(props) => props.theme.width};
  max-width: ${(props) => props.theme.maxWidth};
  top: ${(props) => props.theme.top};
  bottom: ${(props) => props.theme.bottom};
  left: ${(props) => props.theme.left};
  right: ${(props) => props.theme.right};
  margin: ${(props) => props.theme.margin};
  padding: ${(props) => props.theme.padding};
  z-index: ${(props) => props.theme.zIndex};
  background: ${(props) => props.theme.background};
  .header-container {
    font-family: "Mulish", sans-serif;
    position: absolute;
    height: 40vh;
    max-height: 400px;
    width: inherit;
    max-width: var(--max-width);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    padding: 2rem 6rem;
    z-index: 10;
    background: #ffffff;
  }
  .logo {
    padding-top: 1rem;
  }
  .input-container {
    width: 100%;
    display: flex;
    position: absolute;
    justify-content: ${(props) => props.theme.justifyContent};
    margin: ${(props) => props.theme.marginBtn};
    top: ${(props) => props.theme.topBtnContainer};

    @media (max-width: 929px) {
      position: static;
      justify-content: center;
      min-width: 268px;
    }
  }
  .borders {
    transition: box-shadow 0.3s ease-in-out;
    display: flex;
    position: ${(props) => props.theme.positionAbsolute};
    align-items: center;
    height: 3em;
    background: #ffffff;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
    border-radius: 1em;
    padding: ${(props) => props.theme.borderPadding};
    max-width: ${(props) => props.theme.bordersMaxWidth};
    width: ${(props) => props.theme.borderContainerWidth};
  }
  .borders:hover {
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
  .guest-btn {
    background: transparent;
    font-size: 0.8rem;
    color: #bdbdbd;
    box-shadow: none;
    width: ${(props) => props.theme.btnItemWidth};
    height: ${(props) => props.theme.guestBtnHeight};
  }

  p {
    margin: 0;
    margin-right: 1rem;
    font-size: 0.9rem;
  }
  .btn {
    margin-right: auto;
    font-size: 0.9rem;
    width: ${(props) => props.theme.btnItemWidth};
    background: transparent;
    color: #333333;
    text-align: left;
    span {
      font-weight: 800;
      text-transform: capitalize;
      font-size: 0.6rem;
    }
  }
  .vertical-line {
    height: 100%;
    border: 1px solid #f2f2f2;
  }
  .search-icon {
    width: ${(props) => props.theme.btnItemWidth};
    margin: 0 auto;
    text-align: center;
  }

  i {
    width: 1.1rem;
    height: 1.1rem;
    align-self: center;
    margin-right: 1rem;
  }
  .search-btn {
    background: transparent;
    border: none;
    box-shadow: none;
    background: #eb5757e5;
    width: 7.875em;
    height: 100%;
    border-radius: 1em;
    color: #f2f2f2;
    text-align: center;
  }
  .location-btn:hover {
    border: 1px solid #333333;
    border-radius: 1em;
  }
  .hover-borders:hover {
    border: 1px solid #333333;
    border-radius: 1em;
  }

  .location-container {
    position: absolute;
    top: 5em;
    max-width: 1232px;
  }

  .location {
    display: flex;
  }
  .guest {
    position: relative;
    top: -0.48em;
  }

  .guest-change-btn {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    max-width: 5.375em;
    gap: 1em;
    padding-bottom: 5.375em;
  }

  .type-guest {
    font-weight: 700;
    color: #333333;
    font-size: 0.875rem;
  }
  .age-guest {
    font-weight: 400;
    width: none !important;
    font-size: 0.875rem;
  }
  .decrease,
  .increase {
    width: 1.438em !important;
    height: 1.438em;
    margin: 0;
  }
  .fa-minus,
  .fa-plus {
    text-align: center;
    position: relative;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
  }
  @media (max-width: 954px) {
    .borders-query {
      display: grid;
    }
    .search-btn {
      width: none !important;
      min-width: 80px;
    }
    .btn {
      width: 100%;
      min-width: 80px;
    }

    .location-container {
      position: relative;
      top: 8em;
      display: flex;
      justify-content: center;
      min-width: 171px;
    }
    .guest-btn-container {
      position: absolute;
    }
    .guest-change-btn {
      padding-bottom: 1em;
    }
  }
  @media (max-width: 478px) {
    .guest-btn-container {
      position: absolute;
      bottom: 2em;
      display: grid;
      justify-content: center;
    }
  }
  @media (min-width: 479px) and (max-width: 954px) {
    .guest-btn-container {
      position: absolute;
      bottom: 2em;
      display: grid;
      justify-content: center;
      left: 50%;
      transform: translate(-50%, 11px);
    }
  }
  .smaller-screen {
    position: relative;
    top: 7em;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: grid;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    min-width: 171px;
  }
  .location:hover {
    border: 1px solid black;
    border-radius: 0.5rem;
    transition: var(--transition);
  }
  .fa-location-dot {
    color: #4f4f4f;
  }
`;

export default header;
