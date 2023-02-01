import { addDays, format } from 'date-fns'
import React, { useEffect, useRef, useState } from 'react'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import './DatePicker.css'

// export interface DatePickerProps {}

const DatePicker = (/* props: DatePickerProps*/) => {
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection',
    },
  ])

  console.log(range)

  const [open, setOpen] = useState(false)

  const refDate = useRef<any>(null)
  const valueRef = useRef<any>(null)

  useEffect(() => {
    document.addEventListener('keydown', hideOnescape, true)
    document.addEventListener('click', hideOnClickOutside, true)
  }, [])

  const hideOnescape = (e: any) => {
    // eslint-disable-next-line
    console.log(e.key)
    if (e.key === 'Escape') {
      setOpen(false)
    }
  }

  const hideOnClickOutside = (e: any) => {
    if (refDate.current && !refDate.current.contains(e.target)) {
      setOpen(false)
    }
  }

  return (
    <div className='calendarWrap'>
      <input
        ref={valueRef}
        value={`${format(range[0].startDate, 'dd/yyyy')} to ${format(range[0].endDate, 'dd/yyyy')}`}
        readOnly
        id='inputBox'
        className='inputBox'
        onClick={() => setOpen((open) => !open)}
      />
      <div ref={refDate}>
        {open && (
          <DateRange
            onChange={(item: any) => setRange([item.selection])}
            // showSelectionPreview={true}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            months={1}
            ranges={range}
            direction='horizontal'
            weekStartsOn={1}
          />
          // <DateRange
          //   editableDateInputs={true}
          //   onChange={(item: any) => setRange([item.selection])}
          //   moveRangeOnFirstSelection={false}
          //   ranges={range}
          //   weekStartsOn={1}
          // />
        )}
      </div>
    </div>
  )
}

export default DatePicker
