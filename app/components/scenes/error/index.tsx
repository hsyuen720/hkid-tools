import { type FC } from "react";
import styles from "./styles";

export type ErrorScenesProps = {
  status: number;
  description: string;
};

const ErrorScenes: FC<ErrorScenesProps> = ({ status, description }) => {
  return (
    <styles.container>
      <styles.content>
        <styles.statusCode>{status}</styles.statusCode>
        {/* <styles.heading tag="div" icon={FaUnlink} title={title} /> */}
        <styles.description>{description}</styles.description>
      </styles.content>
    </styles.container>
  );
};
export default ErrorScenes;
