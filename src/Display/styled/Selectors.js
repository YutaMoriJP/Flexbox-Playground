import styled from "styled-components";

const Selectors = styled.article`
  label {
    background: #f8f9fa;
    display: flex;
    flex-direction: column;
    font-family: Arial, Helvetica, sans-serif;
    select {
      cursor: pointer;
      padding: 3px;
    }
  }
  border-radius: 5px;
  display: grid;
  margin: auto;
  background-color: #343a40;
  justify-content: center;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  padding: 10px 15px;
  > * {
    border: 1px solid #dee2e6;
    border-radius: 4px;
    padding: 3px;
  }
`;

export default Selectors;
