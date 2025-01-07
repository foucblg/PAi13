import { Injectable } from "@angular/core";
import { FormArray, FormGroup } from "@angular/forms";

class User {
    private name: string;
    private email: string;
    private tasks : Task[];
    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
        this.tasks = [];
    }

    addTask(task:Task){
        this.tasks.push(task)
    }
    removeTaskById(id:number){
        this.tasks.filter((e, i) => e.getId() !== id);
    }

}

class Task{
    private id;
    constructor(id:number){
        this.id = id;
    }

    getId(){
        return this.id
    }

}

@Injectable({
    providedIn: 'root'
  })
export class UserService {
    private users : User[];

    constructor() {
        console.log("init");
        this.users = [];
    }

    setUsers(array_users: FormArray<any>) {
        this.users = [];
        for (const userControl of array_users.controls) {
            if (userControl instanceof FormGroup) {
                const name = userControl.get('name')?.value;
                const email = userControl.get('email')?.value;
                this.users.push(new User(name, email));
            }
        }
        console.log(this.users)
    }

    getUsers(){
        return this.users
    }

}