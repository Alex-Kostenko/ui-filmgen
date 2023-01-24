import React from "react";
import "./Tag.css";

export interface TagProps {
  label: string;
}

const Tag = (props: TagProps) => {
  return <div className="tag">{props.label}</div>;
};

export default Tag;
