console.log("first");
let seconds = 0;
const timeEnd = setInterval(()=>{
    seconds++;
    console.log(seconds)
    if (seconds > 10) {
       clearInterval(timeEnd);
    }
},1000)