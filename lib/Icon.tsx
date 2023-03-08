import React from "react";
import  "./importIcons";
import  './icon.scss';
import classes from "./classes";

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  const {className,...restProps} = props
  
  return (
      <svg className={classes('lui-icon',className)}   {...restProps}>
        <use xlinkHref={`#${props.name}`}></use>
      </svg>
  );
};

export default Icon;
