import { json, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { type ChangeEvent, useCallback, useState } from "react";
import styles from "~/styles/validate.style";
import { generate, format } from "~/utils/generate";
import validate from "~/utils/validate";

export const meta: MetaFunction = () => ({
  title: "HKID Validator",
  description: "Validate Hong Kong Identity Card Number",
});

export const loader = () => {
  const hkid = format(generate(null), false);
  return json(hkid);
};

const ValidatorPage = () => {
  const hkid = useLoaderData() as string;
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(value);
    setIsValid(validate(value));
  }, []);

  return (
    <>
      <span>DO NOT input parentheses</span>
      <span>
        Example: <strong>{hkid}</strong>
      </span>
      <styles.validateInput value={value} onChange={handleInput} />
      <styles.message $show={value.length !== 0} $valid={isValid}>
        {isValid ? "Valid" : "Invalid"} HKID
      </styles.message>
    </>
  );
};
export default ValidatorPage;
