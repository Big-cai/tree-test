import React from "react";
import  "./importIcons";
import  './icon.scss';


interface IconProps {
  name: string;
  onClick: (e) => void
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  console.log(props,'props');
  
  return (
      <svg className="lui-icon" onClick={props.onClick}>
        <use xlinkHref={`#${props.name}`}></use>
      </svg>
  );
};

export default Icon;
