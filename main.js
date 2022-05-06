var inputText = document.getElementById("textArea");
var clearInput = true;
var oper = "";

var num = "";
var result = 0;
inputText.value = 0;


function addNumber(number){

    if(clearInput == true || oper !== ""){
        inputText.value = "";
    }
    clearInput = false;
    inputText.value += number;
    num = inputText.value;

};

function clearCalculator(){
    clearInput = true;
    inputText.value = 0;
    result = 0;
}

function compute(ope){

    debugger

    if(oper !== ""){

        switch (oper) {
        
            case "+":
                result = result + parseInt(num);
                inputText.value = result;
                num = 0;
                oper = "";
                break;
        
            default:
                result = 0;
                break;
    
        }

    }else{
        result = parseInt(num);
    }

    oper = ope;

}











// var varible01 = parseInt(prompt("Insert first number"));
// var varible02 = parseInt(prompt("Insert second number"));
// var operator = parseInt(prompt("Insert number: \n 1 for adding \n 2 for subtract \n 3 for multiply"));
// var result = 0;

// if(operator == 1){
//     result = varible01 + varible02;
// };

// if(operator == 2){
//     result = varible01 - varible02;
// };

// if(operator == 3){
//     result = varible01 * varible02;
// };

// alert("The result is " + result);





























// var inputText = document.getElementById("text");
// var number1 = undefined;
// var number2 = undefined;
// var ope = undefined;
// var result = undefined;


// function addNumber(number){
//     inputText.value += number;
//     // console.log();
// }

// function operation(operator){
    

//     debugger
//     if(ope != undefined){
//         number2 = parseInt(inputText.value);
//         addResult();
//     }else{
//         number1 = parseInt(inputText.value);
//         ope = operator;
//         inputText.value = '';
//     }
    
// }

// function addResult(){

//     debugger
//     if(ope == 'multiply'){
//         result = number1 * number2;
//     }

//     inputText.value = result.toString();
// }












