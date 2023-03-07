import React from "react";
import  "./icons/weixin.svg";


interface IconProps {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  console.log(props,'props');
  
  return (
    <span>
      <svg>
        <use xlinkHref="#weixin"></use>
      </svg>
    </span>);
};

export default Icon;
