import { Global } from "@emotion/react";
import { useNavigate } from "@remix-run/react";
import styles from "~/styles/landing.styles";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <styles.container>
      <Global styles={styles.injectGlobal} />
      <styles.description>Hello, I am Benny.🤪</styles.description>
      <styles.title>HKID Generator/Validator</styles.title>
      <styles.description>
        This tools is used to generate and validate Hong Kong Identity Card number.
      </styles.description>
      <styles.explore title="Check it out!!" onClick={() => navigate("/generate")} />
    </styles.container>
  );
};
export default LandingPage;
