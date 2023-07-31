import { Service } from "./Service";

export class User {
    id: number; nom: string; prenom: string; email: string;
    constructor(id: number, nom: string, prenom: string, email: string, service: Service | undefined, status: boolean | undefined) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
    }
}