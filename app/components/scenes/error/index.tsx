import { Global } from "@emotion/react";
import { useMemo, type FC } from "react";
import styles from "./styles";

export type ErrorScenesProps = {
  status: number;
};

const messages: { [key: number]: { heading: string; description: string } } = {
  404: {
    heading: "Page Not Found ☹️",
    description: "The page you are looking for might have been removed.",
  },
};

const ErrorScenes: FC<ErrorScenesProps> = ({ status }) => {
  const message = useMemo(() => messages[status], [status]);
  return (
    <styles.container>
      <Global styles={styles.injectGlobal} />
      <styles.content>
        <styles.statusCode>{status}</styles.statusCode>
        <styles.heading>{message.heading}</styles.heading>
        <styles.description>{message.description}</styles.description>
      </styles.content>
    </styles.container>
  );
};
export default ErrorScenes;
