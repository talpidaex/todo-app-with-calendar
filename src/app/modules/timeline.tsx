'use client'
import React, { useLayoutEffect, useRef, useState } from "react";
import Cell from "./cell";
import "./timeline.scss"
import Weeks from "./weeks";
import Month from "./month";
import dayjs from "dayjs";

export default function Timeline() {

    let cells = Array.from({ length: 365 })
    let month = Array.from({ length: Math.floor(365 / 7) })
    let weeks = Array.from({ length: 7 })
    const cellRef = React.createRef<HTMLDivElement>()
    const weekRef = useRef<HTMLDivElement>(null)
    const [cellHeight, setCellHeight] = useState<number>(0)
    const [cellWidth, setCellWidth] = useState<number>(0)
    const [monthStyle, setMonthStyle] = useState<number>(0)

    /** Calculator cell height dynamic */
    useLayoutEffect(() => {
        if (cellRef.current) {
            const computedStyle = window.getComputedStyle(cellRef.current)
            const height = cellRef.current.offsetHeight;
            const width = cellRef.current.offsetWidth;
            const marginTop = parseInt(computedStyle.marginTop);
            const marginRight = parseInt(computedStyle.marginRight);
            const marginBottom = parseInt(computedStyle.marginBottom);
            const marginLeft = parseInt(computedStyle.marginLeft);
            setCellHeight(height + marginTop + marginBottom)
            setCellWidth(width + marginRight + marginLeft)
        }
    }, [cellRef])

    /** Calculator weeks width and margin-month div from it. */
    useLayoutEffect(() => {
        if (weekRef.current) {
            setMonthStyle(weekRef.current.clientWidth)
        }
        // console.table({ "1yearsAgo": dayjs().add(-365, 'days').toDate(), "now": dayjs().toDate(), "diff" : dayjs().toDate().diff() })
    }, [weekRef])

    return (
        <div className="timeline">
            <div className="timeline-months" style={{ marginLeft: monthStyle }}>
                {month.map((_, index) => <Month style={{ width: cellWidth }} key={index} index={index} />)}
            </div>
            <div className="timeline-body">
                <div className="timeline-weeks" ref={weekRef}>
                    {weeks.map((_, index) => <Weeks key={index} index={index} />)}
                </div>
                <div className="timeline-cell-container" style={{ height: cellHeight * 7 }}>
                    {cells.map((_, index) => <Cell ref={cellRef} key={index} />)}
                </div>
            </div>
        </div>

    )


}