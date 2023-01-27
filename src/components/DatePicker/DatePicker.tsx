import React, { useEffect, useRef, useState } from "react";
import { addDays, format } from "date-fns";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./DatePicker.css";

export interface DatePickerProps {}

const DatePicker = (props: DatePickerProps) => {
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const [open, setOpen] = useState(false);

  const refDate = useRef<any>(null);
  const valueRef = useRef<any>(null);

  useEffect(() => {
    document.addEventListener("keydown", hideOnescape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  const hideOnescape = (e: any) => {
    console.log(e.key);
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  const hideOnClickOutside = (e: any) => {
    if (refDate.current && !refDate.current.contains(e.target)) {
      setOpen(false);
    }
  };

  return (
    <div className="calendarWrap">
      <input
        ref={valueRef}
        value={`${format(range[0].startDate, "MM/dd/yyyy")} to ${format(
          range[0].endDate,
          "MM/dd/yyyy"
        )}`}
        readOnly
        id="inputBox"
        className="inputBox"
        onClick={() => setOpen((open) => !open)}
      />
      <div ref={refDate}>
        {open && (
          <DateRangePicker
            onChange={(item: any) => setRange([item.selection])}
            // showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={2}
            ranges={range}
            direction="horizontal"
          />
        )}
      </div>
    </div>
  );
};

export default DatePicker;
