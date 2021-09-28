const alertTest = () =>{
    alert("hi alert!!");
}
const confirmTest = () =>{
   const confirmResult = confirm("hi there!! are you confirm!!");
   if (confirmResult) {
       alert(" yes")
   }
   else{
       alert("no");
   }
}
const promptTest = () =>{
    const promptResult = prompt("your name please");
    if (promptResult) {
        console.log('your name is: ',promptResult)
    }

}