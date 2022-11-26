import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const setButtonColor = (primaryColor: string, secondaryColor: string) => css`
  background-color: ${primaryColor};
  border-color: ${secondaryColor};
  box-shadow: ${secondaryColor} 0.25rem 0.25rem 0 0;
  color: ${secondaryColor};

  &:hover {
    background-color: ${primaryColor};
  }

  &:active {
    box-shadow: ${secondaryColor} 0.15rem 0.15rem 0 0;
  }
`;

export const styles = {
  button: styled.button`
    appearance: none;
    border-radius: 1.5rem;
    cursor: pointer;
    display: inline-block;
    font-size: 1rem;
    font-family: inherit;
    border: 0.15rem solid;
    padding: 0 1rem;
    line-height: 2.25rem;
    text-align: center;
    text-decoration: none;
    user-select: none;
    touch-action: manipulation;
    &:active {
      transform: translate(0.15rem, 0.15rem);
    }
    ${setButtonColor("black", "white")}
  `,
} as const;
