import styled from "styled-components";

const StyledButton = styled.button`
  padding: 8px 15px;
  background-color: #2a2a72;
  background-image: linear-gradient(315deg, #2a2a72 0%, #009ffd 74%);
  border-radius: 3px;
  cursor: pointer;
  color: white;
  font-weight: 500;
  border: 0;
  position: relative;
  z-index: 100;
  transition: transform 0.5s ease-in-out, background 0.5s ease-in-out;
  :hover {
    transform: scale(1.1);
  :active {
    background-color: #045de9;
    background-image: linear-gradient(315deg, #045de9 0%, #09c6f9 74%);
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
