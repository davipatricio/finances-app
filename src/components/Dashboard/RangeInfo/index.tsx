"use client";

import { BsCalendar2Event } from "react-icons/bs";
import { AiOutlineReload } from "react-icons/ai";
import { Calendar, DateRangePicker } from "react-date-range";

import styles from "./index.module.scss";
import { useCallback, useEffect, useRef, useState } from "react";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

export default function RangeInfo() {
  const [menuOpen, setMenuOpen] = useState(false);

  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  };

  const pickerDivRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setMenuOpen(true);

    {
      /* move  ref element to mouse position */
    }
    if (pickerDivRef.current) {
      pickerDivRef.current.style.top = `${e.clientY}px`;
      pickerDivRef.current.style.left = `${e.clientX}px`;
    }
  };

  const handleOutsideCalendarClick = useCallback(
    (e: MouseEvent) => {
      if (menuOpen && !pickerDivRef.current?.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    },
    [menuOpen]
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
            <DateRangePicker ranges={[selectionRange]} onChange={() => {}} />
          )}
        </div>
      </div>

      <span className={styles.amount}>R$2.787,32</span>
    </>
  );
}
