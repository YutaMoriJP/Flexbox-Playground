import styled from "styled-components";

const StyledButton = styled.button`
  padding: 8px 15px;
  background-color: #4c6ef5;
  border-radius: 3px;
  cursor: pointer;
  color: white;
  font-weight: 500;
  border: 0;
  position: relative;
  z-index: 100;
  &:hover {
    background-color: #364fc7;
  }
  &:active {
    background-color: #1864ab;
  }
`;

const Button = ({
  type = "button",
  onClick = () => null,
  children,
  ...rest
}) => (
  <StyledButton type={type} onClick={onClick} {...rest}>
    {children.toUpperCase()}
  </StyledButton>
);

export default Button;
