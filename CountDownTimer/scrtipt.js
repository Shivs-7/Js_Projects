// const endDate = "27 July 2025 08:20:00 PM"

// document.getElementById("end-date").innerText = endDate;
// const inputs = document.querySelectorAll("input")
//     // const clock = () => {

// // }

// function clock() {
//     const end = new Date(endDate)
//     const now = new Date()
//     const diff = (end - now) / 1000;

//     if (diff < 0) return;

//     // convert into days;
//     inputs[0].value = Math.floor(diff / 3600 / 24);
//     inputs[1].value = Math.floor(diff / 3600) % 24;
//     inputs[2].value = Math.floor(diff / 60) % 60;
//     inputs[3].value = Math.floor(diff) % 60;
// }

// // initial call
// clock()

// /**
//  *  1 day = 24 hrs
//  *  1 hr = 60 mins
//  *  60 min = 3600 sec
//  */

// setInterval(
//     () => {
//         clock()
//     },
//     1000
// )


const FutureDate=new Date("25 July 2025 11:00 PM");


function calculate(FutureDate){
    const currentDate=new Date();
    const difference=FutureDate-currentDate;

    if(difference<=0){
        return "The target date is already passed."
    }
    
    const days=Math.floor(difference/(1000*60*60*24));
    const hours=Math.floor((difference%(1000*60*60*24))/(1000*60*60));
    // const minutes=Math.floor((difference%(1000*60*60*24))/(1000*60));
    // const seconds=Math.floor((difference%(1000*60*60*24))/(1000));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);


    return {days,hours,minutes,seconds};
}
// console.log(calculate(FutureDate));
// calculate(FutureDate);


function insertvalueinHTML(){
    const {days,hours,minutes,seconds}=calculate(FutureDate);
document.getElementById("end-date").innerText = FutureDate;
    const input=document.querySelectorAll("input");
    input[0].value=days;
    input[1].value=hours;
    input[2].value=minutes;
    input[3].value=seconds;
};

let id=setInterval(insertvalueinHTML,1000);

document.getElementById("stop-timer").addEventListener("click",function(){
    clearInterval(id);
    console.log("Timer Stopped!");
})
