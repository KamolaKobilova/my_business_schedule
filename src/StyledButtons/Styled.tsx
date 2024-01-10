import styled from "styled-components";

export const StyledButton = styled.button<{ variant: string }>`
  width: 100px;
  height: 40px;
  font-weight: 600;
  background-color: white;
  border: ${(props) =>
    props.variant === "error" ? "1px solid  red " : "blue"};
  color: ${(props) => (props.variant === "error" ? " red " : "#5671a1")};
  &:hover {
    background-color: ${(props) =>
      props.variant === "error" ? "red " : "#5671a1"};
    color: white;
  }
`;
