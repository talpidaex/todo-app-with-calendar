'use client'
import dayjs, { Dayjs } from "dayjs";
import React, { useEffect, useState } from "react";
import Modal from "../modal/modal";
import Task from "../task/task";


export type Ref = HTMLDivElement;

interface Props {
    startDate: Dayjs,
    index: number,
    currentDay: string
}

const Cell = React.forwardRef<Ref, Props>((props, ref) => {

    const [today, setToday] = useState<boolean>(false)
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [selectedDay, setSelectedDay] = useState<string>("")

    useEffect(() => {
        if (props.startDate.add(props.index, 'day').format('DD/MM/YYYY') === props.currentDay) {
            setToday(true)
        }
    }, [props.startDate, props.currentDay, props.index])


    const handleClick = (selectedDay: Dayjs) => {
        setSelectedDay(selectedDay.format('DD/MM/YYYY'))
        setIsOpen(true)
    }

    return (
        <>
            <div ref={ref} className={`timeline-cell ${today ? 'today' : ''}`} onClick={() => handleClick(props.startDate.add(props.index, 'day'))}></div>
            {isOpen && <Modal setIsOpen={setIsOpen} >
                <Task day={selectedDay} />
            </Modal>
            }
        </>
    )
}
)

Cell.displayName = 'Cell';
export default Cell;


