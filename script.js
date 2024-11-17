// let result=document.getElementById("result");
// let buttons=document.querySelectorAll(".calculator button");

// buttons.forEach((button)=>{
//     button.addEventListener("click",()=>{
//         const value=button.textContent;

//         if(value==="AC"){
//             result.value=" ";
//         }
//         else if(value==="DEL"){
//             result.value=result.value.slice(0,-1);
//         }
//         else if(value==="="){
//             try{
//               result.value=eval(result.value) || "";
//             }
//             catch(error){
//                alert("Error");
//             }
//         }
//         else{
//             result.value+=value;
//         }
//     })
// })


let reuslt=document.getElementById("result");
let buttons=document.querySelectorAll(".calculator button");

buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        const btncontent=button.textContent;
        if(btncontent==="AC"){
           funcAc();
        }
        else if(btncontent==="DEL"){
           funcDEL();
        }
        else if(btncontent==="="){
            equal();
        }
        else{
            reuslt.value+=btncontent;
        }
    })
})



function funcAc(){
    reuslt.value=" ";
}

function funcDEL(){
reuslt.value= reuslt.value.slice(0, -1);
}


function equal(){
    try{
        reuslt.value=eval(reuslt.value) || " ";
    }
    catch(error){
        reuslt.value="Error"
    }
   
}