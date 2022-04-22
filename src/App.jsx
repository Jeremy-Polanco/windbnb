import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Header from "./components/header";
import Main from "./components/Main";
import data from "./stays.json";
import Footer from "./components/Footer";
function App() {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [bnbData, setBnbData] = useState(data);

  const LightTheme = {
    background: "rgba(79, 79, 79, 0.4)",
  };

  const DarkTheme = {
    background: "#ffffff",
  };

  return (
    <ThemeProvider theme={LightTheme}>
      {isSearchActive ? (
        <div
          className="bg"
          style={{
            backgroundColor: "rgba(79, 79, 79, 0.6)",
            width: "100vw",
            height: "100vh",
            position: "fixed",
            zIndex: "10",
          }}
        ></div>
      ) : (
        <div></div>
      )}
      <Wrapper>
        <Header
          isSearchActive={isSearchActive}
          setIsSearchActive={setIsSearchActive}
          bnbData={bnbData}
          setBnbData={setBnbData}
        />
        <Main bnbData={bnbData} setBnbData={setBnbData} />
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
}

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 2rem 6rem;
  max-width: var(--max-width);
  background: #ffffff;
  @media (max-width: 600px) {
    padding: 2rem 1rem;
  }
`;

export default App;
