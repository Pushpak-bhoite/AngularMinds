

let todoInput = document.getElementById("todoInput");
let ulShow = document.getElementById("ulShow");
let addBtn = document.getElementById("addBtn");
let saveBtn = document.getElementById("saveBtn");
let deleteAll = document.getElementById("deleteAll");
let checkBox = document.getElementById("checkBox");


let taskArr = []

addBtn.addEventListener("click", (event) => {
    if (!isTaskValid(todoInput.value)) return

    let taskArr = JSON.parse(localStorage.getItem("storedItems")) || [];

    let inputVal = { task: todoInput.value, complete: true };
    console.log("inputVal " + inputVal.task);
    taskArr.unshift(inputVal)
    todoInput.value = ""
    localStorage.setItem("storedItems", JSON.stringify(taskArr))

    showData()
})


document.addEventListener("DOMContentLoaded", function () {
    console.log("The page is loaded ");
    showData()
})

function showData() {

    let taskArr = JSON.parse(localStorage.getItem("storedItems")) || [];

    let tItems = ""
    taskArr.forEach((element, index) => {
        tItems += `<li class="mb-3 row justify-content-around  align-items-center">
            <div class="col-2">
                <input class="form-check-input" ${element.complete ? "": "checked"}  type="checkBox" id="checkComplete" onclick="taskComplete(${index})" >
            </div>
          <span class=" col-5 text ${element.complete ? "": "text-decoration-line-through"}">${element.task} </span>
          <div class="col-4 d-flex ">
            <button class="col-6 btn  mx-1 edit"  onclick="editEle(${index})" > <i class=" fa-solid fa-pen-to-square border-none"></i> </button >
            <button class="col-6 btn  mx-1 delete " onclick="deteleEle(${index})"> <i class="fa-solid fa-xmark"></i> </button>
          </div>
        </li> `
    })

    ulShow.innerHTML = tItems
}


function isTaskValid(task) {
    return task = task && task.trim()  || false
}


function deteleEle(index) {
    taskArr = JSON.parse(localStorage.getItem("storedItems"))
    taskArr.splice(index, 1);
    localStorage.setItem("storedItems", JSON.stringify(taskArr))

    showData()
}

function editEle(index) {
    taskArr = JSON.parse(localStorage.getItem("storedItems"))
    todoInput.value = taskArr[index].task

    saveBtn.setAttribute("name", index)

    saveBtn.classList.add("d-block")
    saveBtn.classList.remove("d-none")
    addBtn.classList.add("d-none")
    addBtn.classList.remove("d-block")

}

saveBtn.addEventListener("click", () => {
    addBtn.classList.add("d-block")
    addBtn.classList.remove("d-none")
    saveBtn.classList.add("d-none")
    saveBtn.classList.remove("d-block")

    let index = saveBtn.getAttribute("name")
    taskArr[index].task = todoInput.value
    localStorage.setItem("storedItems", JSON.stringify(taskArr))
    todoInput.value = ""

    showData()
})

deleteAll.addEventListener('click', () => {
    localStorage.removeItem("storedItems")
    showData()
})

function taskComplete(index) {

        taskArr = JSON.parse(localStorage.getItem("storedItems"))
    taskArr[index].complete = !taskArr[index].complete
    localStorage.setItem("storedItems", JSON.stringify(taskArr))
    showData()
    
}




