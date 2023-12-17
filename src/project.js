export default function createProject(name, description, todoList) {
    return {
        name: name,
        description: description,
        todoList: todoList,

        deleteToDo(todo) {
            todoList.slice(todoList.indexOf(todo), 1);
        }
    }
}