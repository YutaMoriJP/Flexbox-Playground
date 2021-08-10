import "./styles.css";
import React from "react";
import Flex from "./Display/Flex";
import styled from "styled-components";

const Container = styled.article`
  width: 90%;
  margin: auto;
  @media (min-width: 1400px) {
    width: 60%;
    margin: auto;
  }
`;

export default function App() {
  return (
    <Container>
      <Flex />
    </Container>
  );
}
