import { Task } from "../../../domain/utilities/Task"
import TaskComponent from "./Task";

type taskListProps =
    {
        taskList: Task[];
        setListeDesTaches: React.Dispatch<React.SetStateAction<Task[]>>
    }
const TaskListComponent = ({ taskList, setListeDesTaches }: taskListProps) => {
    return (
        <ul>
            {
                taskList.length > 0 ?
                    taskList.map(task => <li key={task.id}><TaskComponent listeDesTaches={taskList} setListeDesTaches={setListeDesTaches} task={task} /></li>)
                    :
                    <>La liste est vide</>
            }
        </ul>
    )
}
export default TaskListComponent;