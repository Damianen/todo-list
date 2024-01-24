export default function build() {
    const sideBar = document.createElement("div");
    sideBar.classList.add("side-bar");

    const main = document.createElement("div");
    main.classList.add("main");

    const createButton = document.createElement("button");
    createButton.textContent = "Create new Project!"
    createButton.classList.add("create-btn");

    const sidebarMain = document.createElement("div"); 
    sidebarMain.classList.add("sidebar-main");

    const title = document.createElement("h1");
    title.textContent = "To-Do List";
    title.classList.add("title");

    const logoDiv = document.createElement("div");
    logoDiv.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" class="logo"><path d="M18,8.5A2.5,2.5,0,1,1,15.5,6,2.5,2.5,0,0,1,18,8.5Zm-1.341,9.213a11.038,11.038,0,0,1-.828,2.222A7.634,7.634,0,0,1,9,24H8V19.143A3.214,3.214,0,0,0,4.857,16H0V15A7.634,7.634,0,0,1,4.065,8.169a11.038,11.038,0,0,1,2.222-.828C9.96,2.38,14.221.178,20.458,0H20.5A3.489,3.489,0,0,1,24,3.551C23.82,9.877,21.686,14,16.659,17.713ZM21,3.508A.5.5,0,0,0,20.515,3c-5.461.162-8.839,1.966-12.038,6.431a28.441,28.441,0,0,0-2.206,3.737,6.287,6.287,0,0,1,4.561,4.561,28.376,28.376,0,0,0,3.737-2.206C19.042,12.317,20.846,8.949,21,3.508ZM1.631,18.728C.857,19.5.38,21.831.211,22.8L0,24l1.2-.212c.961-.17,3.278-.649,4.052-1.425a2.58,2.58,0,0,0,0-3.635A2.613,2.613,0,0,0,1.631,18.728Z"/></svg>'
    logoDiv.classList.add("logo-div");
    logoDiv.append(title);

    sidebarMain.append(logoDiv, createButton);

    sideBar.append(sidebarMain);

    const todaysTasks = document.createElement("div");
    todaysTasks.classList.add("todays-tasks");

    const text = document.createElement("h1");
    text.textContent = "Tasks due today:";

    const newTask = document.createElement("div");
    newTask.classList.add("new-task");
    const newTaskForm = document.createElement("form");
    newTask.append(newTaskForm);

    const newTaskName = document.createElement("input");
    const newTaskPriority = document.createElement("select");
    newTaskPriority.innerHTML = '<option value="">priority</option>';
    const newTaskBtn = document.createElement("button");
    newTaskForm.append(newTaskBtn, newTaskName, newTaskPriority);
    newTaskBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><path d="M17,11H13V7a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1v4H7a1,1,0,0,0-1,1H6a1,1,0,0,0,1,1h4v4a1,1,0,0,0,1,1h0a1,1,0,0,0,1-1V13h4a1,1,0,0,0,1-1h0A1,1,0,0,0,17,11Z"/></svg>'

    todaysTasks.append(text);

    todaysTasks.append(newTask);

    const weekTasks = document.createElement("div");
    const weekTasksTitle = document.createElement("h1");
    weekTasksTitle.textContent = "Task due this week:";
    weekTasks.append(weekTasksTitle);

    main.append(todaysTasks, weekTasks);

    document.body.append(sideBar, main);
}