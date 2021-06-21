const taskContainer=document.querySelector(".task__container")
//since 2 divs are there with same parent class it displays output as array when we use getElementsByClassName so we use query selector

const generateNewCard=(taskData)=>`
<div class="col-md-6 col-lg-4" id=${taskData.id}><!--medium screen need cards of width 6 and large one is width 4-->
<div class="card">
    <div class="card-header d-flex justify-content-end gap-2">
        <button type="button" class="btn btn-outline-danger"><i class="fas fa-pencil-alt"></i></button>
        <button type="button" class="btn btn-outline-warning"><i class="fas fa-trash-alt"></i></button>
    </div>
    <img src=${taskData.imageUrl} class="card-img-top" alt="books">
    <div class="card-body">
      <h5 class="card-title">${taskData.taskTitle}</h5>
      <p class="card-text">${taskData.taskType}</p>
      <p class="card-description">${taskData.taskDescription}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    <div class="card-footer d-flex justify-content-end">
        <button type="button" class="btn btn-primary">Open Task</button>
    </div>
  </div> 
</div>`;

const saveChanges=()=>{
    const taskData={
        id: `{Date.now()}`,//(template literal)eg: 12345676543, it returns unique no. every second
        imageUrl:document.getElementById("imageurl").value,
        taskTitle:document.getElementById("tasktitle").value,
        taskType:document.getElementById("tasktype").value,
        taskDescription:document.getElementById("taskdescription").value,
    };
    //console.log(taskData);
taskContainer.insertAdjacentHTML("beforeend", generateNewCard(taskData));
};
