const taskContainer=document.querySelector(".task__container")
//since 2 divs are there with same parent class it displays output as array when we use getElementsByClassName so we use query selector
var globalStore=[];

const generateNewCard=(taskData)=>`
<div class="col-md-6 col-lg-4"><!--medium screen need cards of width 6 and large one is width 4-->
<div class="card">
    <div class="card-header d-flex justify-content-end gap-2">
        <button type="button" class="btn btn-outline-danger" onclick="editCard.apply(this,arguments)" id=${taskData.id}><i class="fas fa-pencil-alt" id=${taskData.id} onclick="editCard.apply(this,arguments)"></i></button>
        <button type="button" class="btn btn-outline-warning" onclick="deleteCard.apply(this,arguments)" id=${taskData.id}><i class="fas fa-trash-alt" id=${taskData.id} onclick="deleteCard.apply(this,arguments)"></i></button>
    </div>
    <img src=${taskData.imageUrl} class="card-img-top" alt="books">
    <div class="card-body">
      <h5 class="card-title">${taskData.taskTitle}</h5>
      <p class="card-description">${taskData.taskDescription}</p>
      <a href="#" class="btn btn-primary" id="card-type">${taskData.taskType}</a>
    </div>
    <div class="card-footer d-flex justify-content-end">
        <button type="button" class="btn btn-primary">Open Task</button>
    </div>
  </div> 
</div>`;

const loadInitialCardData=()=>{
    //access localstorage to get card data
    const getCardData=localStorage.getItem("tasky");
    //destringify strings to objects
    const {cards}=JSON.parse(getCardData);
    
    //update our globalStore//loop over the array of task objects to create html cards and inject it to DOM
    cards.map((cardObject)=>{
    taskContainer.insertAdjacentHTML("beforeend", generateNewCard(cardObject));
    globalStore.push(cardObject);
    });
}

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
//access local storage to store data in globalStore(above) and not delete anything on refresh
globalStore.push(taskData);
localStorage.setItem("tasky", JSON.stringify({cards:globalStore})) //id,data
//localStorage.setItem("tasky", taskData), it is wrong because everytime local storage stores a new card by replacement
//cards is array of objects
};

const deleteCard=(event)=>{
    event=window.event;
    //get element id
    const targetID=event.target.id;
    const tagname=event.target.tagName;
    //match id with id inside global store
    globalStore=globalStore.filter((cardObject)=>cardObject.id!=targetID);
    //if match found remove it
    localStorage.setItem("tasky", JSON.stringify({cards:globalStore}));
    //contact parent
    //taskContainer.removeChild()
    if(tagname==="BUTTON"){
        return taskContainer.removeChild(event.target.parentNode.parentNode.parentNode);
    }
    else{
        return taskContainer.removeChild(event.target.parentNode.parentNode.parentNode.parentNode);
    }
};


const editCard=(event)=>{

    const edition=(children)=>{
        console.log(children[5].nodeName);
        for(var i=0;i<children.length;i++){
            if(children[i].nodeName=="DIV" && children[i].getAttribute("class")=="card-body"){
                const siblings=children[i].childNodes;
                for(var j=0;j<siblings.length;j++){
                    if(siblings[j].nodeName=="H5" || siblings[j].nodeName=="P" || siblings[j].nodeName=="A"){
                        siblings[j].contentEditable=true;
                    }
                }
            }
        }
        let submitButton=children[7].childNodes[1];
        submitButton.innerHTML="Save Changes";
    }

    /*
    let taskTitle=parentElement.childNodes[5].childNodes[1];
    let taskDescription=parentElement.childNodes[5].childNodes[3];
    let taskType=parentElement.childNodes[5].childNodes[5];
    taskTitle.setAttribute("content-editable",true);....
    */

    event=window.event;
    const targetID=event.target.id;
    const tagname=event.target.tagName;
    editStore=globalStore.filter((cardObject)=>cardObject.id==targetID);
    if(tagname=="BUTTON"){
        const children=event.target.parentNode.parentNode.childNodes;
        edition(children);
    }
    else{
        const children=event.target.parentNode.parentNode.parentNode.childNodes;
        edition(children);
    }
    console.log(editStore);
}




//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo6iP4R4I11hL56uufDjoNESU5tHxvDsAJuQ&usqp=CAU

//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTynHfBuLHkLUNPZFkIHShI0Z4NL2-h-wC76Q&usqp=CAU

//open the card as optional