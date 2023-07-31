import { useFormik } from 'formik';
import './New.css'
import { Task } from '../../../domain/utilities/Task';
type newTaskProps = {
    listeDesTaches: Task[],
    setListeDesTaches: React.Dispatch<React.SetStateAction<Task[]>>
}
const NewTaskComponent = ({ listeDesTaches, setListeDesTaches }: newTaskProps) => {
    const addTask = (newTask: string) => {
        setListeDesTaches([...listeDesTaches, new Task(newTask)]);
    }
    const newTaskForm = useFormik({
        initialValues: { task: '' },
        onSubmit: (values, { resetForm }) => {
            addTask(values.task)
            resetForm()
        }
    });
    return (
        <form onSubmit={newTaskForm.handleSubmit}>
            <input type="text" placeholder='Que ce que vous voulez faire?' className='new-task-input' {...newTaskForm.getFieldProps('task')} />
            <button type='submit' className='new-task-button'>Ajouter</button>
        </form>
    )
}
export default NewTaskComponent;