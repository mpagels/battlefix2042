import styled from "styled-components";
import { useFavorites } from "../contexts/FavoriteContext";

export default function SubTitle() {
  const { isBattlefieldFixed } = useFavorites();
  return (
    <Sub>
      Is Battlefield 2042 fixed for me?{" "}
      <span>{isBattlefieldFixed ? "YES" : "NO"}</span>
    </Sub>
  );
}

const Sub = styled.h2`
  margin: 0;
  padding: 0;
  text-align: center;
  font-size: 0.8em;
  color: black;
  background-color: #26ffdf;

  & span {
    background-color: black;
    color: #26ffdf;
    padding: 1px 5px;
  }
`;
