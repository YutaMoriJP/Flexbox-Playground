import styled, { css } from "styled-components";

const Article = styled.article`
  position: relative;
  border-radius: 5px;
  box-sizing: border-box;
  display: ${({ display }) => display};
  width: 100%;
  margin: auto;
  background-color: #343a40;
  min-height: 70vh;
  ${(props) =>
    props.display === "flex" &&
    css`
      flex-direction: ${({ direction }) => direction};
      justify-content: ${({ justify }) => justify};
      gap: 10px;
      flex-wrap: ${({ wrap }) => wrap};
      align-content: ${({ content }) => content};
      align-items: "center";
      align-items: ${({ align }) => align};
    `}
  ${(props) => props.display === "grid" && css``}
`;

const Box = styled.article`
  box-sizing: border-box;
  background: #12b886;
  padding: 50px;
  flex-grow: ${(props) => props.flexGrow};
  flex-shrink: ${(props) => props.flexShrink};
  flex-basis: ${(props) => props.flexBasis};
  /*flex: ${({ flexGrow, flexShrink, flexBasis }) =>
    `${flexGrow} ${flexShrink} ${flexBasis}`};*/
`;

export { Article, Box };
