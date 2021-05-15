import styled from "styled-components";

const Center = styled.article`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  margin: 5px;
  > * {
    grid-column: 5 / 7;
    @media (max-width: 600px) {
      grid-column: 2 / 10;
    }
  }
`;

export default Center;
