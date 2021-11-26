import styled from "styled-components/macro";
import { Route, Routes } from "react-router";
import Start from "./pages/start";
import About from "./pages/about";
import NavBar from "./components/NavBar";
import SubTitle from "./components/SubTitle";

function App() {
  return (
    <div>
      <AppTitle>BATTLEFIX 2042</AppTitle>
      <SubTitle />
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
