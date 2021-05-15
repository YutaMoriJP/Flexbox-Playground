import React from "react";
import Select from "../Select/Select";
import Container from "../Container/Container";
import useMediaQuery from "../useHooks/useMediaQuery";
import Selectors from "./styled/Selectors";

import {
  counts,
  wraps,
  directions,
  justifys,
  aligns,
  contents
} from "../data/options";

export default function Flex() {
  const isMobile = useMediaQuery(600);
  const [count, setCount] = React.useState(isMobile ? 5 : 3);
  const [direction, setDirection] = React.useState("row");
  const [justify, setJustify] = React.useState("center");
  const [align, setAlign] = React.useState("stretch");
  const [wrap, setWrap] = React.useState(isMobile ? "wrap" : "no-wrap");
  const [content, setContent] = React.useState("stretch");

  const reset = () => {
    setDirection("row");
    setJustify("center");
    setAlign("stretch");
    setWrap(isMobile ? "wrap" : "no-wrap");
    setContent("stretch");
    setCount(isMobile ? 5 : 3);
  };
  return (
    <>
      <Selectors>
        <Select
          type="Select Count:"
          value={count}
          options={counts}
          onChange={setCount}
        />
        <Select
          type="Direction:"
          options={directions}
          value={direction}
          onChange={setDirection}
        />
        <Select
          type="Justify-Content:"
          options={justifys}
          value={justify}
          onChange={setJustify}
        />
        <Select
          type="Align-Items:"
          options={aligns}
          value={align}
          onChange={setAlign}
        />
        <Select
          type="Flex-Wrap:"
          options={wraps}
          value={wrap}
          onChange={setWrap}
        />
        <Select
          type="Align-Content:"
          options={contents}
          value={content}
          onChange={setContent}
        />
      </Selectors>

      <Container
        display="flex"
        justify={justify}
        count={count}
        direction={direction}
        align={align}
        wrap={wrap}
        content={content}
        reset={reset}
      />
    </>
  );
}

/* <Select
        type="Align-Self"
        options={selves}
        value={self}
        onChange={setSelf}
      />
      <Select type="Flex" options={flexes} value={flex} onChange={setFlex} />*/
