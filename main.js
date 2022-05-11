//hello tanvir i am you from 11 may 2022...
//convert decimal to binary
let inputField = document.getElementById("inputNum");//call the input
let submitButton = document.getElementById("submited");//calling submit button 
function convert(){
    submitButton.addEventListener('click',()=>{
        let decimalNumber = Number(inputField.value);
        let binary = decimalNumber.toString(2);
        if(decimalNumber <0){
            alert("Enter Positive Number");
        } 
        else if(decimalNumber == ''){
            submitButton.value = 'ENTER Num😒';
        }  
        else{
            document.getElementById("result").innerHTML = binary;//if you press enter key it will be called
            submitButton.value = 'DONE';
        } 
    })       
}
inputField.addEventListener('keyup',(e)=>{
    let decimalNumber = Number(inputField.value);
    document.getElementById("result").innerHTML = '^_^'
    let binary = decimalNumber.toString(2);
    submitButton.value = 'Convert'
    if(e.keyCode === 13 || convert())
{//for enter keycode - 13
    if(decimalNumber <0){
     document.getElementById("label").innerHTML = 'Enter Positive balue'
    } 
    else if(decimalNumber == ''){
        alert("enter decimal number 😒")
    }
    else{
        document.getElementById("result").innerHTML = binary;//if you press enter key it will be called
    }
}
 
})