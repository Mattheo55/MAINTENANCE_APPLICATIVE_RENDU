import { TaskRepository } from "./repository/task_repository.ts";

const task_repository : TaskRepository = new TaskRepository();

console.log('Bienvenue sur ToDo App')
console.log('Version 1.0.0')

go_menu()

function go_menu() {
    console.log('Menu Principale')
    console.log('--------------------------')
    console.log('1 | Créer une tache')
    console.log('2 | Voir toute vos taches')
    console.log('3 | Completer une de vos taches')


    const input = prompt('Choisir votre option')

    switch (input) {
        case "1":
            go_create_task();
            break;
        case '2':
            go_read_all_task();
            break;
        case "3":
            go_complete_task();
            break;
        default:
            go_menu();
    }
}

function go_create_task() {
    console.log('Menu de création de tache')

    do {
        var nom_task = prompt('Choisir un nom de Tache :')
    } while (nom_task == null || nom_task.length == 0)
    
    task_repository.create_task({
        'id': 0,
        'name': nom_task!,
        'is_completed': false
    })

    go_menu()
}

function go_read_all_task() {
    console.log('Toute vos taches')

    task_repository.read_all_task()

    const input = prompt("Retour au menu (appuyez sur ENTREE)")

    go_menu()
}

function go_complete_task() {
    console.log('Choisir une tache a completer')

    task_repository.read_all_task()

    
    do{
        var input = prompt('Tache a complete : ')
    } while (Number(input) < 0 && Number(input) > task_repository.get_task_lenght())

    task_repository.complete_task(Number(input))

    go_menu()
}