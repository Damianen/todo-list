export default function createTodo(title, description, priority, project, dueDate) {
    return {
        title: title,
        description: description,
        priority: priority,
        project: project,
        dueDate: dueDate
    }
}