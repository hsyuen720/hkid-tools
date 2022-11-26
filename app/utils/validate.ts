const validate = (hkid: string) => {
  if (hkid.length === 0 || !/^[A-Z]{1,2}[0-9]{6}[0-9A]{1}/.test(hkid)) return false;
  const digits = hkid.split("");
  const checkDigit = digits.pop();
  const sum = digits.reduce(
    (result, value, index) => {
      const multiple = digits.length + 1 - index;
      if (/[A-Z]/.test(value)) {
        return result + (value.charCodeAt(0) - 55) * multiple;
      } else {
        return result + parseInt(value) * multiple;
      }
    },
    digits.length % 2 === 0 ? 0 : 36 * 9,
  );
  const remainder = sum % 11;
  if (isNaN(remainder) || checkDigit === undefined || checkDigit.length === 0) {
    return false;
  } else if (remainder === 0) {
    return checkDigit === "0";
  } else if (remainder === 1) {
    return checkDigit === "A";
  } else {
    return 11 - remainder === parseInt(checkDigit);
  }
};

export default validate;
