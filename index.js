//This is my submission for the JS Calculator task
  

function calculator(){
  //this function takes the user input and acts on it based on the operator inputted by the user

  let leftOperand, rightOperand, operator, result;

  //define the add, subtract, multiply, divide and modular functions
  function add(num1, num2){
    console.log(num1+num2);
  }

  function subtract(num1, num2){
    console.log(num1-num2);
  }

  function product(num1, num2){
    console.log(num1*num2);
  }

  function divide(num1, num2){
    console.log(num1/num2);
  }

  function modulo(num1, num2){
    console.log(num1%num2);
  }
  
  function operation(input){

    /*
        This section checks for the operator inputted by the user.
        Gets the left and right operand, removes the spaces in the left and right operand.

    */
    if(input.includes('+')){
      leftOperand = parseInt(input.split("+").shift());
      rightOperand = parseInt(input.split("+").pop());

      add(leftOperand, rightOperand);
    }

    else if(input.includes('-')){
      leftOperand = parseInt(input.split("-").shift());
      rightOperand = parseInt(input.split("-").pop());

      subtract(leftOperand, rightOperand);

    
  }
  
  //declare the console prompt to capture user input
  const name = prompt("Welcome, please enter your name ");
  console.log('Hi ',name, '!');
  
  const userInput = prompt("Now input your calculations in this format: 2+2, 4-3, 5*3 etc. and press enter ");

  operation(userInput);

  console.log("Press Run to restart the calculator");
}
  /*function operation(num1, num2, operator){
    if (operator === '+'){
      console.log(num1 + num2);
    }
    else if(operator === '-'){
      subtractNums(num1, num2);
    }
    else if(operator === '*'){
      console.log(num1*num2);
    }
    else if(operator === '/'){
      console.log(num1/num2);
    }
    else if(operator === '%'){
      console.log(num1%num2);
    }
    else console.log("Please use a valid operator!");
  }

  //declare the console prompt to capture user input
  const name = prompt("Welcome, please enter your name ");
  console.log('Hi ',name, '!');
  
  const userInput = prompt("Now input your calculations in this format: 2+2, 4-3, 5*3 etc. and press enter ");

  
  
  /*const calc = userInput.split("");
  
  if (calc.length > 3)
    console.log("Please enter your commands in this format: 2+2, 4-3, 5*3 without spaces and press enter ");
  else
    operation(parseInt(calc[0]), parseInt(calc[2]), calc[1]);*/
  
  

calculator();
//End