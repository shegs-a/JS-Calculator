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
        The replaceAll function is used to remove the spaces in any of the operands by replacing the space with no space.

        parseInt converts the string to integers
        

    */
    if(input.includes('+')){

      //splits the input string at the + operator and stores the string to the left of the operator
      leftOperand = input.split('+').shift(); 
      leftOperand = parseInt(leftOperand.replaceAll(' ','')); 

      //splits the input string at the + operator and stores the string to the right of the operator
      rightOperand = input.split('+').pop();
      rightOperand = parseInt(rightOperand.replaceAll(' ','')); 

      add(leftOperand, rightOperand);
    }

    else if(input.includes('-')){
      leftOperand = parseInt((input.split('-').shift()).replaceAll(' ',''));
      rightOperand = parseInt((input.split('-').pop()).replaceAll(' ',''));

      subtract(leftOperand, rightOperand);
    }

    else if(input.includes('*')){
      leftOperand = parseInt((input.split('*').shift()).replaceAll(' ',''));
      rightOperand = parseInt((input.split('*').pop()).replaceAll(' ',''));

      product(leftOperand, rightOperand);
    }

    else if(input.includes('/')){
      leftOperand = parseInt((input.split('/').shift()).replaceAll(' ',''));
      rightOperand = parseInt((input.split('/').pop()).replaceAll(' ',''));

      divide(leftOperand, rightOperand);
    }

    else if(input.includes('%')){
      leftOperand = parseInt((input.split('%').shift()).replaceAll(' ',''));
      rightOperand = parseInt((input.split('%').pop()).replaceAll(' ',''));

      modulo(leftOperand, rightOperand);
    }

    else
      console.log("Please include a valid operator in your input");
  }
  
  //declare the console prompt to capture user input
  const name = prompt("Welcome, please enter your name ");
  console.log('Hi ',name, '!');

  console.log("\nPlease note that you can only perform addition, subtraction, multiplication, division and modular arithmetic with this calculator!");
  
  const userInput = prompt("\nNow input your calculations in this format: 2+2, 4-3, 5*3 etc. and press enter ");

  operation(userInput);

  console.log("Press Run to restart the calculator");
}

//the code starts here.
calculator();
//End