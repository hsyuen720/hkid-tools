import styled from "@emotion/styled";
import theme from "./theme";

const styles = {
  validateInput: styled.input`
    background-color: transparent !important;
    color: inherit;
    font-size: 1.25rem;
    font-family: inherit;
    border: none;
    border-bottom: 0.15rem dashed ${theme.primary};
    outline: none;
    padding: 0;
  `,
  message: styled.div<{ $show: boolean; $valid: boolean }>`
    display: ${(props) => (props.$show ? "block" : "none")};
  `,
} as const;

export default styles;
