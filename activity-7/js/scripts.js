/*

//Array to hold tasks
var tasks = [];

//Task status 'enum'
var taskStatus = {
    active: 'active',
    completed: 'completed'
};

//Task constructor function
function Task (id,name,status) {
    this.id = id;
    this.name = name;
    this.status = status;
}

//Creates a new task element and adds it to the DOM
function addTaskElement (task) {
    //create elements
    var listEl = document.getElementById('active-list');
    var taskEl = document.createElement('li');
    var textEl = document.createTextNode(task.name);

    //Set attributes
    taskEl.setAttribute('id', task.id);

    //add text to task element
    taskEl.appendChild(taskEl);

    //add text to task element
    listEl.appendChild(taskEl);
}

//click handler to add a new task
function addTask (event) {
    var inputEl = document.getElementById('input-task');
    if(inputEl.value != '') {
        //create a unique id
        var id = 'item-' + tasks.length;
        
        //create new task
        var task = new Task(id, inputEl.value, taskStatus.active);
        tasks.push(task);

        //Add task to the DOM
        addTaskElement(task);

        //Reset input
        inputEl.value = '';
    }
}

    //click handler to complete a task
    function completeTask (event) {
        //get the task element
        var taskEl = event.target;
        var id = taskEl.id;

        //find corresponding task in tasks array and update status
        for (var i = 0; i < tasks.length; i++) {
            if (tasks[i].id === id) {
                tasks[i].status = taskStatus.completed;
                break;
            }
        }

        //move task element from active list to completed list
        taskEl.remove();
        document.getElementById('completed-list').appendChild(taskEl);
    }

    //optional key press handler to automatically click add task button
    function clickButton (event) {
        if (event.keyCode === 13) {
            document.getElementById('add-task').click();
        }
    }

    //initializes the app
function init () {
    //wire up the add task button click handler
    document.getElementById('add-task').onclcick = addTask;

    //wire up the task completed list item click handler
    document.getElementById('active-list').onclick = completeTask;

    //optional wire up the task input key press handler
    document.getElementById('input-task').onkeypress = clickButton;
}

init();


*/


//Create an array to hold tasks
var tasks = [];

//Task status 'enum' object 
var taskStatus = {
    active: 'active',
    completed: 'completed'
};

//Task constructor function
function Task(id, name, status) {
    this.id = id;
    this.name = name;
    this.status = status;
}

//Creates a new task element and adds it to the DOM
function addTaskElement(task) {
    //Create elements
    var listEl = document.getElementById('active-list');
    var taskEl = document.createElement('li');
    var textEl = document.createTextNode(task.name);

    //Set attributes
    taskEl.setAttribute('id', task.id);

    //Add text to task element
    taskEl.appendChild(textEl);

    //Add task element to list
    listEl.appendChild(taskEl);
}

//Click handler to add a new task
function addTask(event) {
    var inputEl = document.getElementById('input-task');
    if (inputEl.value != '') {
        //Create a unique id
        var id = 'item-' + tasks.length;

        //Create a new task
        var task = new Task(id, inputEl.value, taskStatus.active);
        tasks.push(task);

        //Add the task to the DOM
        addTaskElement(task);

        //Reset input
        inputEl.value = '';
    }
}

//Click handler to complete a task
function completeTask(event) {
    //Get the task element
    var taskEl = event.target;
    var id = taskEl.id;

    //Find corresponding task in tasks array and update status
    for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            tasks[i].status = taskStatus.completed;
            break;
        }
    }

    //Move task element from active list to completed list
    taskEl.remove();
    document.getElementById('completed-list').appendChild(taskEl);
}

//(This is optional but we are doing it)
//Key press handler to automatically click add task button
function clickButton(event) {
    if (event.keyCode === 13) {
        document.getElementById('add-task').click();
    }
}

//Initializes the app
function init() {
    //Wire up the add task button click handler
    document.getElementById('add-task').onclick = addTask;

    //Wire up the task completed list item click handler
    document.getElementById('active-list').onclick = completeTask;

    //(Again OPTIONAL) Wire up the task input key press handler
    document.getElementById('input-task').onkeypress = clickButton;
}

init();