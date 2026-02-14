import { assertEquals } from "jsr:@std/assert";
import { TaskRepository } from "../repository/task_repository.ts";


Deno.test("Creation d'une task", () => {
   const task_repository : TaskRepository = new TaskRepository();
    task_repository.create_task({
        'id': 0,
        'name': "test",
        "is_completed": false
    });

  assertEquals(task_repository.tasks.length, 1);
});

Deno.test('Complete task', () => {
    const task_repository : TaskRepository = new TaskRepository();
    task_repository.create_task({
        'id': 0,
        'name': "test",
        "is_completed": false
    });
    task_repository.complete_task(0)

    assertEquals(task_repository.tasks[0].is_completed, true)
})