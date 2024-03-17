import GlobalHeader from "./components/header";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";

import shared from "~/styles/shared.css?url";

export const links = () => [{ rel: "stylesheet", href: shared }];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-gray-100">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <>
      <GlobalHeader>
        <Outlet />
      </GlobalHeader>
    </>
  );
}
