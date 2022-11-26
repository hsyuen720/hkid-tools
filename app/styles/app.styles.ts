import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Link } from "@remix-run/react";
import theme from "./theme";

const styles = {
  injectGlobal: (isValidate: boolean) => css`
    body {
      background-color: ${isValidate ? theme.secondary : theme.primary};
      color: ${isValidate ? theme.primary : theme.secondary};
    }
  `,
  wrapper: styled.div`
    background-color: inherit;
    color: inherit;
    font-family: "Special Elite", cursive;
    transition: all 250ms linear;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  container: styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
  `,
  title: styled.header`
    font-size: 2.5rem;
    text-align: center;
  `,
  link: styled(Link)`
    &:hover {
      font-weight: bold;
      text-decoration: underline;
    }
  `,
} as const;

export default styles;
