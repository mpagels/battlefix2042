import FavoriteSwitch from "./FavoriteSwitch";
import { BsListUl } from "react-icons/bs";
import { SiAboutdotme } from "react-icons/si";

import { useFavorites } from "../contexts/FavoriteContext";
import styled from "styled-components";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export default function NavBar() {
  const { favorites, handleChange, favoriteIsChecked } = useFavorites();

  let { pathname } = useLocation();
  const isAbout = pathname === "/about";

  return (
    <SwitchWrapper>
      {!isAbout ? (
        <>
          <Link to="about" style={{ display: "flex", alignItems: "center" }}>
            <SiAboutdotme size="30" style={{ color: "#26ffdf" }} />
          </Link>
          <FavoriteSwitch
            favoriteIsChecked={favoriteIsChecked}
            handleChange={handleChange}
            label={`Show ${favorites.length} favorites only`}
          />{" "}
        </>
      ) : (
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
          <BsListUl size="30" style={{ color: "#26ffdf" }} />
        </Link>
      )}
    </SwitchWrapper>
  );
}

const SwitchWrapper = styled.div`
  display: flex;
  padding: 0 0 0 20px;
  align-items: center;
  justify-content: space-between;
  height: 40px;
`;
