const deleteTask = function () {
    this.closest('.tasks_list__item').remove()
}


const addTask = (text) => {
    const taskItem = document.createElement('div')
    taskItem.classList.add('tasks_list__item')

    const taskCheckbox = document.createElement('input')
    taskCheckbox.type = 'checkbox'
    taskCheckbox.addEventListener('click', event => {
        event.currentTarget.checked ?
            taskItem.classList.add('completed_task') :
            taskItem.classList.remove('completed_task')
    })

    const taskText = document.createElement('p')
    taskText.innerText = text
    taskText.classList.add('task_item_text')

    const taskDelete = document.createElement('div')
    taskDelete.classList.add('task_item_delete')
    taskDelete.addEventListener('click', deleteTask)

    const taskDeleteImg = document.createElement('img')
    taskDeleteImg.src = 'assets/icons8-delete-48.svg'

    taskDelete.append(taskDeleteImg)
    taskItem.append(taskCheckbox, taskText, taskDelete)

    const tasksListContainer = document.querySelector('.tasks_list__container')
    tasksListContainer.append(taskItem)
}


const addTaskBtn = document.querySelector('.add_task_button')
const addTaskInput = document.querySelector('.add_task_input')

addTaskBtn.addEventListener('click', () => {
    addTask(addTaskInput.value)
    addTaskInput.value = ''
})