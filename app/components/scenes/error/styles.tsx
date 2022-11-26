import styled from "@emotion/styled";

const styles = {
  container: styled.div`
    display: flex;
    height: inherit;
    font-size: 20pt;
  `,
  content: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: auto;
    gap: 1.75rem;
    user-select: none;
  `,
  statusCode: styled.div`
    font-size: 8em;
    line-height: 1;
    text-shadow: 0.03em 0.03em 0 ${({ theme }) => "red"};
  `,
  heading: styled.h1`
    font-size: 2em;
    gap: 0.25em;
  `,
  description: styled.div`
    font-size: 1em;
  `,
} as const;

export default styles;
