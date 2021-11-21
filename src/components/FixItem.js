import styled from "styled-components/macro";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { HiExternalLink } from "react-icons/hi";

const heartStyle = { color: "#26ffdf", cursor: "pointer" };

export default function FixItem({ isFavorite, isFixed }) {
  return (
    <Wrapper>
      <Info>
        {isFavorite ? (
          <MdOutlineFavorite size="30" style={heartStyle} />
        ) : (
          <MdOutlineFavoriteBorder size="30" style={heartStyle} />
        )}
        <FixTitel>No single-player story/campaign mode</FixTitel>
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
  margin: 3px 40px;
`;

const Fixed = styled.div`
  background-color: #26ffdf;
  padding: 0.4em;
  font-size: 0.7em;
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
  font-size: 0.8em;
  margin: 0 10px;
  color: white;
`;
const Wrapper = styled.li``;
