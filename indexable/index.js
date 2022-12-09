import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { SiteContext } from "./src/context";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <SiteContext.Consumer>
    <App />
  </SiteContext.Consumer>
);
