import styled from "styled-components/macro";
import { Route, Routes } from "react-router";
import Start from "./pages/start";
import About from "./pages/about";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <AppTitle>BATTLEFIX 2042</AppTitle>
      <SubTitle>Is Battlefield 2042 fixed for me?</SubTitle>
      <NavBar />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;

const AppTitle = styled.h1`
  font-family: "MyFont";
  text-align: center;
  color: #26ffdf;
  margin-bottom: 0;
`;

const SubTitle = styled.h2`
  margin: 0;
  padding: 0;
  text-align: center;
  font-size: 0.8em;
  color: black;
  background-color: #26ffdf;
`;
