import styled, { css } from "styled-components";

const Article = styled.article`
  position: relative;
  box-sizing: border-box;
  border-radius: 10px;
  box-sizing: border-box;
  display: ${({ display }) => display};
  width: 100%;
  margin: auto;
  padding: 10px;
  background-color: #343a40;
  height: 70vh;
  box-shadow: 0 2.3px 1.6px rgba(0, 0, 0, 0.057),
    0 5.4px 3.7px rgba(0, 0, 0, 0.082), 0 9.7px 6.7px rgba(0, 0, 0, 0.101),
    0 16.1px 11.1px rgba(0, 0, 0, 0.119), 0 26.5px 18.3px rgba(0, 0, 0, 0.138),
    0 46.2px 31.9px rgba(0, 0, 0, 0.163), 0 100px 69px rgba(0, 0, 0, 0.22);

  ${props =>
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
  ${props => props.display === "grid" && css``}
`;

const Box = styled.article`
  box-sizing: border-box;
  border-radius: 5px;
  background: #12b886;
  cursor: pointer;

  padding: 50px;
  flex-grow: ${props => props.flexGrow};
  flex-shrink: ${props => props.flexShrink};
  flex-basis: ${props =>
    /\d/.test(props.flexBasis)
      ? props.flexBasis.replace(/[^\d]/g, "") + "px"
      : props.flexBasis};
  font-family: sans-serif;
  :hover {
    box-shadow: 0 2.3px 1.6px rgba(0, 0, 0, 0.026),
      0 5.4px 3.7px rgba(0, 0, 0, 0.037), 0 9.7px 6.7px rgba(0, 0, 0, 0.046),
      0 16.1px 11.1px rgba(0, 0, 0, 0.054), 0 26.5px 18.3px rgba(0, 0, 0, 0.063),
      0 46.2px 31.9px rgba(0, 0, 0, 0.074), 0 100px 69px rgba(0, 0, 0, 0.1);
  }

  ${props =>
    props.current &&
    css`
      border: 2px solid white;
    `}
`;

export { Article, Box };
