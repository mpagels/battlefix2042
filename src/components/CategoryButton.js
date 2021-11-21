import styled from "styled-components/macro";

export default function CategoryButton({ label, isActive }) {
  return <StyledButton isActive={isActive}>{label.toUpperCase()}</StyledButton>;
}

const StyledButton = styled.button`
  all: unset;
  border: 2px solid #26ffdf;
  padding: 0.7em;
  background-color: ${({ isActive }) => (isActive ? " #26ffdf " : "black")};
  color: ${({ isActive }) => (isActive ? "black" : "#26ffdf")};
  cursor: pointer;
`;
