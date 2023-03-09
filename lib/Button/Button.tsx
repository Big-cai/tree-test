import React from "react";
import  "./button.scss";
import { scopedClassMaker } from "../classes";

const scopedClass = scopedClassMaker('lui-button')

interface BaseButtonProps {
    icon?: React.ReactNode;
    type?: string | undefined;
    shape?: string; 
    size?: string;
    disabled?: boolean;
    loading?: boolean | { delay?: number };
    prefixCls?: string;
    className?: string;
    rootClassName?: string;
    danger?: boolean;
    onClick: ()=> void;
    children?: React.ReactNode;
  }

const Button: React.FunctionComponent<BaseButtonProps>=(props)=> {
    const {className,onClick,type,...restProps} = props
   
    return (
            <button className={`${scopedClass()} ${className}`} onClick={onClick} {...restProps}>{props.children}</button>
    )
}

export default Button