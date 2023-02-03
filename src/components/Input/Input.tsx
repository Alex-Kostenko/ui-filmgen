import React, { useState } from 'react'
import './Input.css'

export interface ButtonProps {
  label?: string
  onClick?: () => any
  className?: string
  [name: string]: any
}
// eslint-disable-next-line
const Input = (props: ButtonProps) => {
  const [value, setValue] = useState('')

  return (
    <div className='wrapperInput input-effect'>
      <input
        type={'text'}
        className='mainInput'
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
