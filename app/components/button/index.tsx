import { type ButtonHTMLAttributes, type FC } from "react";
import { styles, setButtonColor } from "./styles";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

const Button: FC<ButtonProps> = ({ title, ...props }) => (
  <styles.button {...props}>{title}</styles.button>
);

export { setButtonColor };
export default Button;
