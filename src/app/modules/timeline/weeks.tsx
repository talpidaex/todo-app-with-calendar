import { DAYS } from "../../enums/timeline";

export default function Weeks({ index }: { index: number }) {
    return (
        <div className="weeks">{DAYS[index]}</div>
    )
}