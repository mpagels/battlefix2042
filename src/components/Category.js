import styled from "styled-components/macro";
import FixItem from "./FixItem";

export default function Category({ label, data }) {
  return (
    <Wrapper>
      <Header>{label}</Header>
      <Line />
      <FixList>
        {data.map((feature) => (
          <FixItem key={feature.id} {...feature} />
        ))}
      </FixList>
    </Wrapper>
  );
}

const FixList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px;
`;

const Header = styled.header`
  background-color: #26ffdf;
  font-size: 1.5em;
  padding: 0.4em;
  color: black;
  display: inline-block;
`;

const Line = styled.hr`
  margin: 0;
  padding: 0;
  border-top: 3px solid #26ffdf;
`;

const Wrapper = styled.section`
  margin: 40px 20px;
`;
