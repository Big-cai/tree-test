import React from "react";
import  "../importIcons";
import  './icon.scss';
import {scopedClassMaker} from "../classes";

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const scopedClass = scopedClassMaker('lui-icon')


const Icon: React.FunctionComponent<IconProps> = (props) => {
  const {className,...restProps} = props  
  return (
      <svg className={scopedClass('mask',className)}   {...restProps}>
        <use xlinkHref={`#${props.name}`}></use>
      </svg>
  );
};

export default Icon;
