let todoInput=  document.getElementById("todoInput");
let ulShow =  document.getElementById("ulShow");
let addBtn=  document.getElementById("addBtn");
let saveBtn =  document.getElementById("saveBtn");

 
let taskArr = []

addBtn.addEventListener("click",(event)=>{
  if (!isTaskValid(todoInput.value)) return

    let inputVal = todoInput.value ;
    console.log("inputVal "+inputVal);
    taskArr.push(inputVal)
    todoInput.value = ""
    localStorage.setItem("storedItems",JSON.stringify(taskArr))

  
    showData()
})

showData()
 
function showData(){

    taskArr = JSON.parse(localStorage.getItem("storedItems"))
    let tItems = "" 
    taskArr.forEach((element,index) => {
        tItems += `<li class="mb-3 d-flex justify-content-around">

          <span class="text">${element} </span>
          <div>
          <button class="btn btn-outline-primary  edit"  onclick="editEle(${index})" > Edit </button >
          <button class="btn btn-outline-danger delete " onclick="deteleEle(${index})"> Delete </button>
          </div>
        </li> `
    })

    ulShow.innerHTML = tItems 
}


function isTaskValid(task){
    return task = task || false
}


function deteleEle(index){
    taskArr = JSON.parse(localStorage.getItem("storedItems"))
    taskArr.splice(index, 1);
    localStorage.setItem("storedItems",JSON.stringify(taskArr))
    
    showData()

}

function editEle(index){
    todoInput.value = taskArr[index]

    saveBtn.setAttribute("name", index)
    
    saveBtn.classList.add("d-block")
    saveBtn.classList.remove("d-none")
    addBtn.classList.add("d-none")
    addBtn.classList.remove("d-block")
    
}

saveBtn.addEventListener("click", ()=> {
    addBtn.classList.add("d-block")
    addBtn.classList.remove("d-none")

    saveBtn.classList.add("d-none")
    saveBtn.classList.remove("d-block")

    // taskArr = JSON.parse(localStorage.getItem("storedItems"))
    let index = saveBtn.getAttribute("name")

    console.log("");
    

    taskArr[index] = todoInput.value


    

    localStorage.setItem("storedItems",JSON.stringify(taskArr))
    
    showData()


    todoInput.value = ""

})

function deleteAll(){
    localStorage.setItem("storedItems",null)
    showData()
    
}
