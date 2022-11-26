import styled from "@emotion/styled";
import Button, { setButtonColor } from "~/components/button";
import theme from "./theme";

const styles = {
  filtering: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 0.25rem dashed ${theme.secondary};
    border-radius: 0.25rem;
    padding: 1rem;
    gap: 0.5rem;

    > span {
      font-size: 1rem;
    }
    > div {
      display: flex;
      flex-direction: row;
      gap: 0.75rem;
    }
  `,
  result: styled.div`
    font-size: 2rem;
    cursor: pointer;
    user-select: none;
    &:hover {
      font-weight: bold;
      text-decoration: underline;
    }
  `,
  generate: styled(Button)`
    ${setButtonColor(theme.primary, theme.secondary)}
  `,
} as const;

export default styles;
