import styled from "styled-components/macro";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { HiExternalLink } from "react-icons/hi";

const heartStyle = {
  color: "#26ffdf",
  cursor: "pointer",
};

export default function FixItem({
  isFixed,
  feature,
  toggleFavorite,
  favorites,
  id,
}) {
  function handleClick() {
    toggleFavorite(id);
  }
  const isFavorite = favorites.includes(id);

  return (
    <Wrapper>
      <Info>
        <FavoriteWrapper>
          {isFavorite ? (
            <MdOutlineFavorite
              onClick={handleClick}
              size="30"
              style={heartStyle}
            />
          ) : (
            <MdOutlineFavoriteBorder
              onClick={handleClick}
              size="30"
              style={heartStyle}
            />
          )}
        </FavoriteWrapper>
        <FixTitel>{feature}</FixTitel>
      </Info>
      {isFixed ? (
        <Additional>
          <Fixed>was fixed on 11.17.2021</Fixed>
          <PatchNotes href="">
            <HiExternalLink size="15" />
            patchnotes
          </PatchNotes>
        </Additional>
      ) : (
        ""
      )}
    </Wrapper>
  );
}

const Additional = styled.div`
  display: flex;
  align-items: center;
  margin: 1px 40px;
`;

const FavoriteWrapper = styled.div`
  width: 30px;
  height: 30px;
`;

const Fixed = styled.div`
  background-color: #26ffdf;
  padding: 0.4em;
  font-size: 0.6em;
`;

const FixTitel = styled.p`
  all: unset;
  margin: 0 10px;
  color: white;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
`;

const PatchNotes = styled.a`
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 0.7em;
  margin: 0 10px;
  color: white;
`;
const Wrapper = styled.li`
  font-family: Roboto;
  margin: 10px 0;
`;
