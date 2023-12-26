import { Dayjs } from "dayjs";

export default function Month({ index, style, startDate }: { index: number, style: object, startDate: Dayjs }) {
    const foundMonth = startDate.add(index, 'week').format('MMM')

    return (
        <div style={style} className={`month ${foundMonth}`}>{foundMonth}</div>
    )
}