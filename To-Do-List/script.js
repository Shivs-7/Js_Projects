
// let btn=document.getElementById("add-task-btn");
// let input=document.getElementById("task-input");
// let list=document.getElementById("task-list");


// // function for taking the value and iinserting it into the list.

// function clicked(){
//     let inputvalue=input.value.trim();

//     if(inputvalue===""){
//         alert("Please insert some text.");
//      return; 
//     }
      
//     //  let listvalue=document.createElement("li");
//     //  listvalue.textContent=inputvalue;

//     //  list.appendChild(listvalue);
//     let listvalue = document.createElement("li");
//     listvalue.classList.add("task-item");

//     // Add the task text to the list item
//     let taskText = document.createElement("span");
//     taskText.textContent = inputvalue;

//     // Add functionality to mark/unmark the task
//     taskText.addEventListener("click", () => {
//         taskText.classList.toggle("completed"); // Toggle the 'completed' class
//     });

//     // Create a delete button
//     let deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "Delete";
//     deleteBtn.classList.add("delete-btn");

//     // Add functionality to delete the task
//     deleteBtn.addEventListener("click", () => {
//         list.removeChild(listvalue); // Remove the task from the list
//     });

//     // Append the task text and delete button to the list item
//     listvalue.appendChild(taskText);
//     listvalue.appendChild(deleteBtn);

//     // Add the list item to the task list
//     list.appendChild(listvalue);

//       input.value=" ";
// }

// btn.addEventListener("click",clicked);


let btn=document.getElementById("add-task-btn");
let input=document.getElementById("task-input");
let list=document.getElementById("task-list");


function show(){
   let inputvalue=input.value.trim();
   if(inputvalue===""){
    alert("Enter the value first");
    return;
   }
   let inputvaluecontent=document.createElement("li");
   inputvaluecontent.textContent=inputvalue.value;
   list.appendChild(inputvaluecontent);
    //    input.value="";
}

btn.addEventListener("click",show);