import { nanoid } from "nanoid";

export class Task {
    id: string; todo: string; state: boolean;
    constructor(todo: string) {
        this.id = nanoid();
        this.todo = todo;
        this.state = false;
    }
    changeState = () => {
        this.state = !this.state;
    }
}