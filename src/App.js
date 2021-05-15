import "./styles.css";
import React from "react";
import Flex from "./Display/Flex";
import styled from "styled-components";
import useMediaQuery from "./useHooks/useMediaQuery";
import Select from "./Select/Select";
import Grid from "./Display/Grid";
import { counts, displays } from "./data/options";

const Container = styled.article`
  width: 90%;
  margin: auto;
  @media (min-width: 1400px) {
    width: 60%;
    margin: auto;
  }
`;

export default function App() {
  const isMobile = useMediaQuery(500);
  const [display, setDisplay] = React.useState("flex");
  const [count, setCount] = React.useState(isMobile ? 5 : 3);
  return (
    <Container>
      {/* <Select
        type="Layout Model"
        value={display}
        options={displays}
        onChange={setDisplay}
      /> */}
      {/*  <Select type="Count" value={count} options={counts} onChange={setCount} />*/}
      {display === "flex" && <Flex />}
      {/*{display === "grid" && <Grid count={count} />}*/}
    </Container>
  );
}
