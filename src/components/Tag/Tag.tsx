import React from "react";
import "./Tag.css";

export interface TagProps {
  label?: string;
  onClick?: () => any;
  className?: string;
}

const Tag = (props: TagProps) => {
  return (
    <div {...props} className={"tag " + props.className}>
      #{props.label}
    </div>
  );
};

export default Tag;
