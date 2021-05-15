import styled from "styled-components";

const Child = styled.article`
  font-size: 0.7rem;
  position: absolute;
  top: 0;
  left: 0;
  label {
    background: #f8f9fa;
    display: flex;
    flex-direction: column;
    font-family: Arial, Helvetica, sans-serif;
  }
  border-radius: 5px;
  display: grid;
  margin: auto;
  background-color: #343a40;
  justify-content: center;
  gap: 5px;
  grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
  padding: 5px;
  > * {
    border: 1px solid #dee2e6;
    border-radius: 4px;
    padding: 3px;
  }
`;

export default Child;
