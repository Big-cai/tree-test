import React, { useState } from "react";
import "./dialog.scss";
import { scopedClassMaker } from "../classes";

interface DiaogProps {
  visible: Boolean;
  title: string | undefined;
  children: React.ReactNode;
  buttons: Array<React.ReactElement> | any;
  onClose: React.MouseEventHandler;
}

// 添加css前缀
const scopedClass = scopedClassMaker("lui-diaog");

const Diaog: React.FunctionComponent<DiaogProps> = (props) => {
  // 取消弹窗
  const cancle = (e) => {
    
    props.onClose(e)
  };

  return (
    <>
      {props.visible ? <div className={scopedClass("mask")} onClick={cancle}></div>:null}
      <div
        id="divs"
        className={`${scopedClass()} ${
          props.visible ? scopedClass("openA") : scopedClass("openB")
        }`}
      >
        <div></div>

        <header className={scopedClass("header")}>{props.title}</header>

        <main className={scopedClass("main")}>{props.children}</main>

        <footer className={scopedClass("footer")}>
          {props.buttons ? (
            <div>
              {props.buttons.map((button, index) => {
                return React.cloneElement(button, { key: index });
              })}
            </div>
          ) : (
            <div>
              <button>cancle</button>
              <button>ok</button>
            </div>
          )}
        </footer>
      </div>
    </>
  )
};

export default Diaog;
