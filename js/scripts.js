
//Single line comment.

/*
This comment can be many lines
*/

// Camel-casing is common for JavaScript!
var myInteger = 340046546546546445;

// we can output to our console via the console.log method.
console.log(myInteger * 3);

if ( (myInteger === 7) || (myInteger === 34))
{
    console.log ('Number is... 7 OR 34!?');
} else if( (myInteger === 6) || (myInteger > 5)){
    console.log('Number is 6!!!')

} else if (myInteger > 5){
    console.log('Number is greater than 5.');
} else if  ( myInteger < 5){
        console.log('Number is less than 5.');
} else{
    console.log( 'Number is 5!?');
}
// Datatype:
var myString = 'Hello World!'; 
myInteger = 64; // already declared at the top so no var!
var myFloat = 12.768; // Decimal number
var myBoolean = true; // True or false
var uhOh = undefined; //no value is yet assigned
var myNull = null; // The value/variale doesn't exist
var myArray = [myString, myInteger, myFloat]; //Array!

//Let's try a loop! Remember: i++ is the same as: 
//                            i = i + 1

for ( var i = 0; i < 5; i++) {
    console.log('Value of position '+i+', in myArray, is:' + myArray[i]);
}

//A basic function!
function myFunction () {
    console.log ( 'My function has run.');
}

//we have to call upon it , in order to run it, don't forget

function smileyFunction()
{
    var input = getInput();
    // input = AddSmileyToEnd( input );
    // input = AddSmileyToBeginning( input );
    // console.log( input );
    input = addSmileyToEnd( input );
    input = addSmileyToBeginning( input );
    writeName( input );
}

// Retrieve input.
function getInput()
{
    return prompt( 'Enter your name.' );
}
// Add a "smiley" string to the end.
function addSmileyToEnd( input )
{
    input = input+":)";
    return input;
}
// Add a (sad) "smiley" string to the beginning.
function addSmileyToBeginning( input )
{
    input = ":("+input;
    return input;
}
// Output a value.
function writeName( input ) {
    console.log( input );
}

smileyFunction ();

//if statement

var a = 3;
var b = 5;

if ( a === b) {
    console.log (' a is identical to be.');
} else {
    console.log ('a and b are not identical.');
}

// converting the above to ternary...

/* 
* syntax is:
* (condition) ? (logic for TRUE): (logic for FALSE);
* Note that it RETURNS the outcome, so it can be used for assignment */

(a === b) ? console.log ('a is identical to be.'): console.log(' a and b are not identical.');

// another loop

var i = 0;
while ( i < 6){
    console.log('while loop: +i');
    i++; //Make sure the condition will eventually be False, or the loop will go on FOREVER! :()
}

//Foreach!? It is a method of the array datatype!

myArray.forEach (function( arrayItem) {
    //Woah! We're in a "closure", or, an " anonymous function" now! We didn't declare and name it, so we won't be able to call it again... it is useful here to process our array items though!
    console.log( 'Array item is :' +arrayItem);
});

//let's give objects a shot!

var myObject = {
    name: 'Bob',
    age: '32',
    hobbies: [
        'sports',
        'movies',
        'hiking'
        ]
}

myObject.age++; //Increment object's "age" property.
myObject.hobbies[1] = 'programming'; //Update array value in position "1"

console.log( 'Hello! My name is' +myObject.name+ '\r\n. I am' +myObject.age+ 'years old, and one of my hobbies is:' +myObject.hobbies[1]+'.');

// Multi-line text can be included in a

var multiLineString = `
This text
     is 
many lines!
`;
