export const generate = (isSingleAlphabet: boolean | null) => {
  const random = (a: number = 1, b: number = 0) => {
    const lower = Math.ceil(Math.min(a, b));
    const upper = Math.floor(Math.max(a, b));
    return Math.floor(lower + Math.random() * (upper - lower + 1));
  };

  let sum = 0;
  const prefix = Array.from({ length: 8 }, (_, index) => {
    const isSingle = isSingleAlphabet ?? Math.random() < 0.5;
    const value = index <= 1 ? (isSingle && index === 0 ? 36 : random(10, 35)) : random(0, 9);
    sum += value * (9 - index);
    return index <= 1 ? (value === 36 ? "" : String.fromCharCode(value + 55)) : value.toString();
  });
  const remainder = sum % 11;
  const lastDigit = remainder === 0 ? "0" : remainder === 1 ? "A" : (11 - remainder).toString();

  return [...prefix, lastDigit];
};

export const format = (value: string[], hasParentheses: boolean) => {
  if (hasParentheses) {
    return value.reduce((result, current, index) => {
      if (index + 1 === value.length) {
        result += `(${current})`;
      } else {
        result += current;
      }
      return result;
    }, "");
  }
  return value.join("");
};
