import { Task } from "../../../domain/utilities/Task"
import './Task.css'
type taskprops =
    {
        task: Task,
        listeDesTaches: Task[],
        setListeDesTaches: React.Dispatch<React.SetStateAction<Task[]>>
    }
const TaskComponent = ({ task, listeDesTaches, setListeDesTaches }: taskprops) => {
    const deleteTaskById = function (taskId: string) {
        // Find the index of the task with the given ID in the tasks array
        const tempList = [...listeDesTaches];
        const taskIndex = tempList.findIndex(task => task.id === taskId);

        // If the task with the given ID is found (index is not -1), remove it from the array
        if (taskIndex !== -1) {
            tempList.splice(taskIndex, 1);
        }
        setListeDesTaches(tempList);
    }
    const toggleTask = (id: string) => {
        const listTemp: Task[] = listeDesTaches.map(task => {
            if (task.id === id) {
                task.changeState();
                return task;
            }
            else {
                return task;
            }
        })
        setListeDesTaches(listTemp);
    }
    return (
        <span className={task.state ? 'line-through' : ''}>
            <input id={task.id} type="checkbox" defaultChecked={task.state} onChange={() => toggleTask(task.id)} />
            <label htmlFor={task.id}>{task.todo} </label>
            <button onClick={() => deleteTaskById(task.id)}>Supprimer</button>

        </span>
    )
}
export default TaskComponent;