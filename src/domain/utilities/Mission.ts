import { User } from "./User";

interface Mission {
    id: string;
    name: string;
    creatBy: User;
    createAt: Date;
    updateAt: Date;
}