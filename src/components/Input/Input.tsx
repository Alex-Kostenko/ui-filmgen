import React, { useRef, useState } from 'react'
import './Input.css'

export interface ButtonProps {
  label?: string
  onClick?: () => any
  className?: string
  [name: string]: any
}

const Input = (props: ButtonProps) => {
  const [value, setValue] = useState('')
  console.log(value.length)

  return (
    <div className='col-3 input-effect'>
      <input
        type={'text'}
        className='effect-20'
        value={value}
        placeholder=''
        onChange={(e) => setValue(e.target.value)}
      />
      {value.length === 0 && <label>Search...</label>}
      <span className='focus-border'>
        <i></i>
      </span>
    </div>
  )
}

export default Input
