import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.3s;

  background-color: ${({ theme, variant }) => 
    theme?.button?.[variant] || "#ccc"};

  color: ${({ variant }) => (variant === "primary" ? "#fff" : "#000")};

  &:hover {
    opacity: 0.8;
  }
`;