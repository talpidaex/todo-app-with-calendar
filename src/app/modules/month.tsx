import { MONTH } from "../enums/timeline";

export default function Month({ index, style }: { index: number, style: object }) {

    return (
        <div style={style} className="month">{index}</div>
    )
}