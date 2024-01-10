import Checkbox from "@/app/components/Checkbox"
import { Plus } from "react-bootstrap-icons"
import "./task.scss"
import { useDispatch } from "react-redux"
import { setTaskToDate } from "@/redux/features/task-slice"

interface Task {
    day: string
}

export default function Task({ day }: Task) {

    const dispatch = useDispatch();

    const handleSubmitTask = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form)
        const data = {
            [day]: {
                taskName: formData.get('task'),
                taskStatus: "completed"
            }
        }
        dispatch(setTaskToDate(data))

    }

    return (
        <div className="task-container">
            <div className="task-header">
                <span>{day}</span>
                <div>Yapılacaklar</div>
            </div>
            <div className="task-content">
                <Checkbox label="test1"></Checkbox>
            </div>
            <div className="task-footer">
                <form onSubmit={handleSubmitTask} className="add-task">
                    <button type="submit">
                        <Plus size={34} />
                    </button>
                    <div className="divider" />
                    <input name="task" placeholder="Görev Ekle" />
                </form>

            </div>
        </div >
    )

}