    const form = document.getElementById('addTaskForm');
    const toDoList = document.getElementById('toDoList');
    
// Retrieve from localStorage
    const saved = JSON.parse(localStorage.getItem('todos')) || [];
    for (let i = 0; i < saved.length; i++) {
        let newToDo = document.createElement('li');
        newToDo.innerText = saved[i].task;
        newToDo.isCompleted = saved[i].isCompleted ? true : false;

        if(newToDo.isCompleted) {
            newToDo.style.textDecoration = 'line-through';
        }
        toDoList.appendChild(newToDo);
    }
    
    form.addEventListener('submit', function(e){
        e.preventDefault();

        let newToDo = document.createElement('li');
        let input = document.getElementById('task');

        newToDo.innerText = input.value;
        newToDo.isCompleted = false;
        input.value = '';
        toDoList.appendChild(newToDo);


    // Save to localStorage
    
    saved.push({ task: newToDo.innerText, isCompleted: false });
    localStorage.setItem('todos', JSON.stringify(saved));
    });

    toDoList.addEventListener('click', function(e){
        let clicked = e.target;

        if (!clicked.isCompleted) {
            clicked.style.textDecoration = 'line-through';
            clicked.isCompleted = true;
        }
        else {
            clicked.style.textDecoration = 'none';
            clicked.isCompleted = false; 
        }
  // breaks for duplicates - another option is to have dynamic IDs
         for (let i = 0; i < saved.length; i++) {
             if (saved[i].task === clicked.innerText) {
             saved[i].isCompleted = !saved[i].isCompleted;
            localStorage.setItem("todos", JSON.stringify(saved));
            }
        }
    });

