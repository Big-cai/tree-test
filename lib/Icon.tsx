import React from "react";
import  "./importIcons";



interface IconProps {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  console.log(props,'props');
  
  return (
    <span>
      <svg>
        <use xlinkHref={`#${props.name}`}></use>
      </svg>
    </span>);
};

export default Icon;
