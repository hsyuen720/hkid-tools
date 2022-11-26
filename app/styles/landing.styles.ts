import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Button, { setButtonColor } from "~/components/button";

const theme = {
  background: "#cfb845",
  color: "#141414",
  secondaryColor: "#1d3c45",
};

const styles = {
  injectGlobal: css`
    body {
      background-color: ${theme.background};
      color: ${theme.secondaryColor};
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
  `,
  title: styled.header`
    font-size: 1.75em;
    font-weight: bold;
    color: ${theme.color};
  `,
  description: styled.span`
    font-size: 1.25em;
    font-weight: normal;
  `,
  explore: styled(Button)`
    ${setButtonColor(theme.background, theme.color)}
  `,
} as const;

export default styles;
