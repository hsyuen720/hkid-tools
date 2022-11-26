import { Global } from "@emotion/react";
import { type LinksFunction } from "@remix-run/node";
import { Outlet, useLocation } from "@remix-run/react";
import { useMemo } from "react";
import styles from "~/styles/app.styles";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Special+Elite&display=swap",
  },
];

const Layout = () => {
  const { pathname } = useLocation();
  const isValidate = useMemo(() => pathname === "/validate", [pathname]);

  return (
    <styles.wrapper>
      <Global styles={styles.injectGlobal(isValidate)} />
      <styles.container>
        <styles.title>{`HKID ${isValidate ? "Validator" : "Generator"}`}</styles.title>
        <Outlet />
        <styles.link to={isValidate ? "/generate" : "/validate"}>
          Switch to HKID {isValidate ? "Generator" : "Validator"}{" "}
        </styles.link>
      </styles.container>
    </styles.wrapper>
  );
};
export default Layout;
