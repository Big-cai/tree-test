import React,{useState} from "react";
import Button from "../Button/Button";
import "./button-exampe.scss";
import { scopedClassMaker } from "../classes";

const scopedClass = scopedClassMaker('lui-btn')
export default function () {
    const [visible,setVisible] = useState(false)
    return(
        <Button onClick={()=>setVisible(!visible)} className={scopedClass('rendered')}>Button</Button>
    )
}