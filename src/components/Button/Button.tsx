import React from 'react';
import './Button.css';

export interface ButtonProps {
  label?: string;
  color?: string;
  onClick?: () => any;
  className?: string;
  [name: string]: any;
}

const Button = (props: ButtonProps) => {
  return (
    <button {...props} className={'offset ' + props.className}>
      {props.label}
    </button>
  );
};

export default Button;
