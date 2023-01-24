import React from "react";
import "./Tag.css";

export interface TagProps {
  label?: string;
  colorBack?: string;
}

const Tag = (props: TagProps) => {
  return (
    <div className="tag" style={{ background: props.colorBack }}>
      {props.label}
    </div>
  );
};

export default Tag;
