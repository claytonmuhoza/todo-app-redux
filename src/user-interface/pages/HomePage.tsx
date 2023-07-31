import { useState } from "react"
import { Task } from "../../domain/utilities/Task"
import NewTaskComponent from "../component/Todo/New"
import TaskListComponent from "../component/Todo/TaskList"
import HeaderComponent from "../component/shared/Header"
import NumberOfTodosComponent from "../component/Todo/NumberOfTodos"

const HomePage = () => {
    // const listeDesTaches: Task[] = [new Task('kwiga react'), new Task('Redux niki?')]
    const [listeDesTaches, setListeDesTaches] = useState<Task[]>([]);
    return (
        <>
            <HeaderComponent />
            <NewTaskComponent listeDesTaches={listeDesTaches} setListeDesTaches={setListeDesTaches} />
            <NumberOfTodosComponent listTask={listeDesTaches} />
            <TaskListComponent taskList={listeDesTaches} setListeDesTaches={setListeDesTaches} />
        </>
    )
}
export default HomePage;