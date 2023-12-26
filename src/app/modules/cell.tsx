'use client'
import { Dayjs } from "dayjs";
import React, { useEffect, useState } from "react";


export type Ref = HTMLDivElement;

interface Props {
    startDate: Dayjs,
    index: number,
    currentDay: string
}

const Cell = React.forwardRef<Ref, Props>((props, ref) => {

    const [today, setToday] = useState<boolean>(false)

    useEffect(() => {
        if (props.startDate.add(props.index, 'day').format('DD/MM/YYYY') === props.currentDay) {
            setToday(true)
        }
    }, [props.startDate, props.currentDay, props.index])


    const handleOnClickCell = () => {
        const foundDay = props.startDate.add(props.index, 'day');
    }

    return (
        <div ref={ref} className={`timeline-cell ${today ? 'today' : ''}`} onClick={handleOnClickCell}></div>
    )
}
)

Cell.displayName = 'Cell';
export default Cell;


