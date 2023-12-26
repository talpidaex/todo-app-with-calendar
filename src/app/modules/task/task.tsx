import Checkbox from "@/app/components/Checkbox"
import "./task.scss"

interface Task {
    day: string
}

export default function Task({ day }: Task) {

    return (
        <div className="task-container">
            {day}
            <h3>Hedefleriniz</h3>
        </div>
    )

}