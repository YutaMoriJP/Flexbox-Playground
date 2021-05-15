import React from "react";
import Container from "../Container/Container";
import Select from "../Select/Select";

export default function Grid({ count }) {
  return (
    <>
      <Container display="grid" count={count} />
    </>
  );
}
