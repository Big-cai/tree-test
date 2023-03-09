import React,{useState} from "react";
import Dialog from "./dialog";
import Button from "../Button/Button";
import "./dialog-example.scss";
import { scopedClassMaker } from "../classes";

const scopedClass = scopedClassMaker('lui-btn')

export default function () {
    const [visible,setVisible] = useState(false)
    return(
        <div>
            <Button onClick={()=>setVisible(!visible)} className={scopedClass('switch')}>open modal</Button>
            <Dialog 
                visible={visible}
                title="提示"
                buttons={
                    [
                        <Button onClick={()=> setVisible(false)} className={scopedClass('switch')}>取消</Button>,
                        <Button onClick={()=> setVisible(false)} className={scopedClass('switch')}>确定</Button>
                    ]
                }
                onClose={()=> setVisible(false)}
            >
                <div>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </div>
            </Dialog>
        </div>
    )
}