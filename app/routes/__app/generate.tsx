import { json, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { useMemo } from "react";
import { useCallback } from "react";
import styles from "~/styles/generate.styles";
import { copyText } from "~/utils/copyText";
import { format, generate } from "~/utils/generate";

export const meta: MetaFunction = () => ({
  title: "HKID Generator",
  description: "Generating Hong Kong Identity Card Number",
});

type LoaderData = {
  options: {
    isSingleAlphabet: Parameters<typeof generate>[0];
    hasParentheses: Parameters<typeof format>[1];
  };
  list: string[];
};

export const loader = () => {
  const options: LoaderData["options"] = { isSingleAlphabet: null, hasParentheses: true };
  const list = generate(options.isSingleAlphabet);
  return json<LoaderData>({ options, list });
};

const GeneratorPage = () => {
  const data = useLoaderData() as LoaderData;
  const [options, setOptions] = useState<LoaderData["options"]>(data.options);
  const [list, setList] = useState<LoaderData["list"]>(data.list);

  const handleOption = useCallback((name: keyof LoaderData["options"], value: unknown) => {
    setOptions((prev) => ({ ...prev, [name]: value }));
    if (name === "isSingleAlphabet") setList(generate(value as boolean | null));
  }, []);

  const hkid = useMemo(() => format(list, options.hasParentheses), [list, options]);

  const handleCopy = useCallback(() => copyText(hkid), [hkid]);

  const handleGenerate = useCallback(() => {
    const list = generate(options.isSingleAlphabet);
    const hkid = format(list, options.hasParentheses);
    setList(list);
    copyText(hkid);
  }, [options]);
  return (
    <>
      <styles.filtering>
        <span>* You can update the options to generate/format HKID Value.</span>
        <div>
          <select
            value={JSON.stringify(options.isSingleAlphabet)}
            onChange={(e) => handleOption("isSingleAlphabet", JSON.parse(e.target.value))}
          >
            <option value={JSON.stringify(null)}>One/ Two Alphabet</option>
            <option value={JSON.stringify(true)}>One Alphabet Only</option>
            <option value={JSON.stringify(false)}>Two Alphabet Only</option>
          </select>
          <div>
            <input
              type="checkbox"
              id="hasParentheses"
              checked={options.hasParentheses}
              onChange={(e) => handleOption("hasParentheses", e.target.checked)}
            />
            <label htmlFor="hasParentheses">Parentheses</label>
          </div>
        </div>
      </styles.filtering>

      <styles.result onClick={handleCopy}>{hkid}</styles.result>
      <styles.generate onClick={handleGenerate} title="Generate New One" />
    </>
  );
};
export default GeneratorPage;
