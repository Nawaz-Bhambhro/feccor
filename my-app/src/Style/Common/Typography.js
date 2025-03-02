import styled from "styled-components";

// Define a mapping for typography variants
const typographyVariants = {
  h1: { fontSize: "2.5rem", fontWeight: "700", lineHeight: "1.2" },
  h2: { fontSize: "2rem", fontWeight: "700", lineHeight: "1.3" },
  h3: { fontSize: "1.75rem", fontWeight: "600", lineHeight: "1.4" },
  h4: { fontSize: "1.5rem", fontWeight: "600", lineHeight: "1.4" },
  h5: { fontSize: "1.25rem", fontWeight: "500", lineHeight: "1.5" },
  h6: { fontSize: "1rem", fontWeight: "500", lineHeight: "1.5" },
  p: { fontSize: "1rem", fontWeight: "400", lineHeight: "1.6" },
  span: { fontSize: "0.875rem", fontWeight: "400", lineHeight: "1.6" },
  small: { fontSize: "0.75rem", fontWeight: "400", lineHeight: "1.6" },
};

// Styled Component for Typography
export const Typography = styled.p`
  font-size: ${({ variant }) => typographyVariants[variant]?.fontSize || "1rem"};
  font-weight: ${({ variant }) => typographyVariants[variant]?.fontWeight || "400"};
  line-height: ${({ variant }) => typographyVariants[variant]?.lineHeight || "1.6"};
  color: ${({ theme, color }) => (color ? theme[color] || color : theme.text)};
  margin: ${({ margin }) => margin || "0"};
  text-align: ${({ align }) => align || "left"};
`;
