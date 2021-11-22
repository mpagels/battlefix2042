import { useState } from "react";
import styled from "styled-components/macro";
import Category from "./components/Category";

const initialData = [
  {
    id: "1",
    feature: "No single-player story/campaign mode",
    isFavorite: false,
    isFixed: true,
    category: "Core Features",
  },
  {
    id: "2",
    feature: "No standard server browser",
    isFavorite: false,
    isFixed: false,
    category: "Core Features",
  },
  {
    id: "3",
    feature:
      "Fewer standardized game modes (Can't even play TDM or smaller scale modes without relying on community servers. Really?)",
    isFavorite: false,
    isFixed: false,
    category: "Core Features",
  },
  {
    id: "4",
    feature: "No standard hardcore mode",
    isFavorite: false,
    isFixed: false,
    category: "Core Features",
  },
  {
    id: "5",
    feature:
      "No persistent lobbies (seriously why do I have to matchmake after EVERY round?)",
    isFavorite: false,
    isFixed: false,
    category: "Core Features",
  },
  {
    id: "6",
    feature:
      "Fewer guns (even including all the portal guns, BF4 still had more at launch)",
    isFavorite: false,
    isFixed: false,
    category: "Infantry Gameplay",
  },
];

function App() {
  const [coreFeatures, setCoreFeatures] = useState(initialData);

  const core = coreFeatures.filter(
    (feature) => feature.category === "Core Features"
  );
  const infantry = coreFeatures.filter(
    (feature) => feature.category === "Infantry Gameplay"
  );
  return (
    <div>
      <AppTitle>BATTLEFIX 2042</AppTitle>
      <SubTitle>Is Battlefield 2042 fixed for me?</SubTitle>
      <Category label="Core Features" data={core} />
      <Category label="Infantry Gameplay" data={infantry} />
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
