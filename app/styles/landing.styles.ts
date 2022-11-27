import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Button, { setButtonColor } from "~/components/button";
import theme from "./theme";

const styles = {
  injectGlobal: css`
    body {
      background-color: ${theme.primary};
      color: ${theme.secondary};
      font-size: 12pt;
    }
  `,
  container: styled.div`
    font-family: "Patua One", cursive;
    height: 100%;
    padding: 0 8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1em;
    @media (max-width: 500px) {
      padding: 0 2rem;
    }
  `,
  title: styled.header`
    font-size: 1.75em;
    font-weight: bold;
    color: ${theme.secondary};
  `,
  description: styled.span`
    font-size: 1.25em;
    font-weight: normal;
  `,
  explore: styled(Button)`
    ${setButtonColor(theme.primary, theme.secondary)}
  `,
} as const;

export default styles;
