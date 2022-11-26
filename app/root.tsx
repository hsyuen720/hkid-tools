import { Global } from "@emotion/react";
import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "@remix-run/react";
import { ToastContainer } from "react-toastify";
import globalStyle from "~/styles/global.styles";
import styles from "react-toastify/dist/ReactToastify.css";
import type { LinksFunction } from "@remix-run/node";
import ErrorScenes from "~/components/scenes/error";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "HKID Tools",
  viewport: "width=device-width,initial-scale=1",
});

export function CatchBoundary() {
  const caught = useCatch();
  return (
    <html>
      <head>
        <title>Oops!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <Global styles={globalStyle} />
        <ErrorScenes status={caught.status} description={caught.statusText} />
        <Scripts />
      </body>
    </html>
  );
}

function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        {typeof document === "undefined" ? "__STYLES__" : null}
      </head>
      <body>
        <Global styles={globalStyle} />
        <ToastContainer newestOnTop />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default App;
