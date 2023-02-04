"use client";

import { DateRangePicker, Range } from "react-date-range";
import { AiOutlineReload } from "react-icons/ai";
import { BsCalendar2Event } from "react-icons/bs";

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export default function RangeInfo() {
  const [menuOpen, setMenuOpen] = useState(false);

  const currentDate = new Date();

  const [state, setState] = useState<Range[]>([
    {
      startDate: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
      endDate: currentDate,
      key: "selection",
    },
  ]);

  const pickerDivRef = useRef<HTMLDivElement>(null);

  const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setMenuOpen(true);

    // move date picker to mouse position
    if (pickerDivRef.current) {
      pickerDivRef.current.style.top = `${e.clientY}px`;
      pickerDivRef.current.style.left = `${e.clientX}px`;
    }
  }, []);

  const handleOutsideCalendarClick = useCallback(
    (e: MouseEvent) => {
      if (menuOpen && !pickerDivRef.current?.contains(e.target as Node))
        setMenuOpen(false);
    },
    [menuOpen, pickerDivRef]
  );

  useEffect(() => {
    window.addEventListener("click", handleOutsideCalendarClick);
    return () =>
      window.removeEventListener("click", handleOutsideCalendarClick);
  }, [handleOutsideCalendarClick]);

  return (
    <>
      <div className={styles.range}>
        <div className={styles.header}>
          <BsCalendar2Event />
          <span>Período:</span>
        </div>
        <div
          className={styles.date}
          onClick={handleClick}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") handleClick(e as any);
          }}
          role="button"
          tabIndex={0}
        >
          <span>1 jan - 31 jan</span>
          <AiOutlineReload />
        </div>

        <div ref={pickerDivRef} style={{ position: "absolute" }}>
          {menuOpen && (
            <DateRangePicker
              ranges={state}
              months={1}
              minDate={new Date(currentDate.getFullYear(), 0, 1)}
              maxDate={currentDate}
              onChange={(item) => setState([item.selection])}
            />
          )}
        </div>
      </div>

      <span className={styles.amount}>R$2.787,32</span>
    </>
  );
}
