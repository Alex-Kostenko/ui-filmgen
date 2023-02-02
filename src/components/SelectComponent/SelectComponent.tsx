import React from 'react'
// import Select from 'react-select'
import './SelectComponent.css'

// type IOptions = {
//   value: string
//   label: string
// }

// type SelectProps = {
//   onChange?: () => any
//   className?: string
//   [name: string]: any
//   options?: Array<IOptions>
//   placeholder?: string
// }

const SelectComponent = () => {
  return (
    // <Select
    //   placeholder={props.placeholder}
    //   classNamePrefix='castom-select'
    //   {...props}
    //   className={'mainSelectStyle ' + props.className}
    //   options={props.options}
    // />
    <select name='asd' id='1'>
      <option value='asd'>asd</option>
      <option value='qwe'>qwe</option>
    </select>
  )
}

export default SelectComponent
