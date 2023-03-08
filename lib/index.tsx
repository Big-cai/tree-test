import { createRoot } from "react-dom/client";
import React from "react";
import Icon from "./Icon";
import Button from "./button";


const fn1: React.MouseEventHandler=(e)=>{
  console.log('微信',e.target);
}

const fn2: React.MouseEventHandler=(e)=>{
  console.log('支付宝',e.target);
}

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(
  <div>
    <Icon name="wechat" onClick={fn1}/>
    <Icon name="alipy" onClick={fn2}/>
    <Button></Button>
  </div>
);
