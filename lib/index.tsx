import { createRoot } from "react-dom/client";
import React from "react";
import Icon from "./Icon";
import Button from "./button";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(
  <div>
    <Icon name="wechat" />
    <Icon name="alipy" />
    <Button></Button>
  </div>
);
