// Day-2.js

var myNumber = '54.6'; //String :o

console.log( myNumber + 6); //concatenation occurs!

myNumber = parseFloat ( myNumber); // Now it is a "float"

console.log( myNumber + 6); //Addition occurs!

myNumber = parseInt ( myNumber); // Now it is an "int"

console.log( myNumber + 6); //Addition occurs!

myNumber = Number(myNumber); //Now it is a 64-bit floating point numeric! The only ACTUAL type of number in JavaScript...!

console.log( myNumber + 6); //Addition Occurs!

// CONVERTING NUMBERS TO STRINGS:

myNumber = myNumber.toString(); //The toString() method will turn a number into a string!

console.log( myNumber + 6); // Concatenation once more!

//Watch out! AUTO - Conversion can be .. interesting! Always check your bases:

var myString = 'Hello World!';
console.log('Test 1');
console.log( 'Type is: ' + ( typeof myString));
console.log (myString); // 'Hello World!'

myString = 5;
console.log('Test 2');
console.log( 'Type is: ' + ( typeof myString));
console.log (myString); //5

myString = myString * 3;
console.log('Test 3');
console.log( 'Type is: ' + ( typeof myString));
console.log (myString); //15

myString = 'Updated string.';
console.log('Test 4');
console.log( 'Type is: ' + ( typeof myString));
console.log (myString); //'Updated string.'

myString = {'another': 'string test!?'};
console.log('Test 5');
console.log( 'Type is: ' + ( typeof myString));
console.log (myString); //{ another: 'string test!?'}

//SWITCH CASE Statements

var mathOperation = 'add';

switch (mathOperation)
{
    case 'add':
        console.log( 5 + 5);
        break;
    case 'subtract':
        console.log( 5 - 5);
    case'divide':
        console.log( 5 / 5 );
        break;
    case 'multiply':
        console.log( 5 * 5);
        break;
    default:
        console.log( 'No operator provided.');
        break;
}

// Let's manipulate things in the DOM ( Document Object Model)

var myParagraph = document.getElementById('my-paragraph'); //Target and store an element
console.log( myParagraph);

myParagraph.textContent =  'Hello World!';
myParagraph.textContent = 'Also, hey how are ya \'?'; // \' is an escape. It says "don't close my string, just store an actual apostraphe here!"

var newParagraph = document.createElement( 'P');
newParagraph.textContent = 'This paragraph was created completely in Javascript! Wowie! Zounds! Gadzooks!'; // Populate your element 

//Add your element to the document body!
document.body.appendChild (newParagraph);

var otherNewParagraph = document.createElement ( 'p');
otherNewParagraph.textContent = 'Second new paragraph.';

otherNewParagraph.style.color = 'darkgray';

var myFirstLink =document.createElement('A'); // An Anchor (LINK).
myFirstLink.textContent = 'Click Here!';
myFirstLink.href = './index.html';
myFirstLink.title = 'Return to the Homepage.';
myFirstLink.style.color = 'red';
myFirstLink.className = 'my-link'
//We're adding the link INTO our brand new paragraph BEFORE it even goes to the browser!
otherNewParagraph.appendChild(myFirstLink);

//Now, our paragraph with TEXT and a link both will be added to the body!
document.body.appendChild( otherNewParagraph);

//Lets try query selecto

var targetLink = document.querySelector ( ' .my-link')

//*********************forms***********************//

var calculatorForm = document.getElementById ( 'calculator');
calculatorForm.addEventListener( 'submit', function(event){

    //STOP the submission (event!)
    event.preventDefault();

    //Collect the form fields (DOM objects.)
    var operatorInput = document.getElementById('operator');
    var num1Input = document.getElementById( 'num1');
    var num2Input = document.getElementById( 'num2');

    // Retrieve the values from the form fields.

    var operatorValue = operatorInput.value;
    console.log(operatorValue);
    var num1Value = num1Input.value;
    console.log(num1Value);
    var num2Value = num2Input.value;
    console.log(num2Value);

    var result = 0;

    //Let's run our math!

switch (operatorValue)
{
    case 'add':
        result = Number(num1Value) + Number(num2Value);
        break;
    case 'subtract':
        result = num1Value - num2Value;
        break;
    case 'divide':
    result = num1Value / num2Value;
        break;
    case 'multiply':
        result = num1Value * num2Value;
        break;
}
// End of Switch
console.log(result);

var resultElement = document.getElementById ('result');
resultElement.textContent = result; // Show the result in our element
}); // End of eventListener

