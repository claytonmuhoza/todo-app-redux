import { Task } from "../../../domain/utilities/Task";

type numberOfTodosProps = {
    listTask: Task[]
}
const NumberOfTodosComponent = ({ listTask }: numberOfTodosProps) => {
    const countTodos = (table: Task[]): number => {
        let count = 0;
        let allTrue = true;

        for (let i = 0; i < table.length; i++) {
            if (table[i].state === false) {
                count++;
                allTrue = false;
            }
        }

        return allTrue ? 0 : count;
    }
    return (
        <div>
            Il {countTodos(listTask) === 0 && 'ne'} vous reste  {countTodos(listTask) > 0 ? countTodos(listTask) === 1 ? <>une tâche</> : <>{countTodos(listTask)} tâches</> : <>aucune tâche</>} à faire
        </div>
    );
}
export default NumberOfTodosComponent;