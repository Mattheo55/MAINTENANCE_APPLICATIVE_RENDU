import { Task } from "../type/task.ts";

export class TaskRepository {
    public tasks : Task[] = []

    public create_task(task: Task): void {
        this.tasks.push(task)
        console.log('--------------------------')
        console.log("Tache ajouter avec succes")
    }

    public read_all_task(): void {
        for (let index = 0; index < this.tasks.length; index++) {
            if(this.tasks[index].is_completed) {
                console.log(index + " | " + this.tasks[index].name + " - FAIT" )            
            } else {
                console.log(index + " | " + this.tasks[index].name + " - A FAIRE" )
            }
        }
    }

    public complete_task(number : number): void {
        this.tasks[number].is_completed = true;
        console.log("La tache " + this.tasks[number].name + "a ete complete");
    }

    public get_task_lenght(): number {
        return this.tasks.length
    }

}