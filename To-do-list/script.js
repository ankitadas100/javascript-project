function addTask(){
    const newTask=document.createElement('li')
    const taskList=document.getElementById('taskList')
    console.log(taskList)
   
    taskList.append(newTask)
    newTask.textContent=document.getElementById('inputTask').value
    localStorage.setItem("task",newTask.textContent)
    const data=localStorage.getItem("task")
    console.log(data)
    document.getElementById('inputTask').value=""
    deleteTASK(newTask)
}
function deleteTASK(newTask)
{
    const deletBtn=document.createElement('button')
    deletBtn.classList.add("button-24")
    deletBtn.textContent="delete";
    newTask.appendChild(deletBtn)
    deletBtn.onclick=function(){
        newTask.remove()
    }
}