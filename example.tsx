import React from "react";
import { createRoot } from "react-dom/client";
import Routers from "./Router/index";
const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
  <div>
    <Routers />
  </div>
);
