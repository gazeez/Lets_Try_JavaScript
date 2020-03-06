/**
 * Let's try JavaScript, again!
 * Multi-line comment uses slashes and asterisks!
 * @author  TECHCareers
 * @date    2020.03.06
 * @git     https://github.com/TECHCareers-by-Manpower/wb-lets-try-javascript-again.git
 * @link    https://github.com/TECHCareers-by-Manpower/wb-lets-try-javascript-again
 * @summary Testing out some wicked JavaScript!
 */

// Single line, comment!

// Basic assignment:
var myVariable = '38.9587'; // Variable set as a string.

myVariable =  myVariable + 5;
console.log( myVariable ); // Oop, one of these is a string so plus is concatenating!

// Type-handling:
myVariable = parseFloat( myVariable ); // Floating point number, decimal maintained.
console.log( myVariable ); // Is now a numeric value.

myVariable = parseInt( myVariable ); // Converted to integer, decimal removed.
console.log( myVariable ); // 38

myVariable = Number( myVariable ); // Converted to any number type it can.
console.log( myVariable ); // No change here.

myVariable = myVariable + 5; // Addition. Beware "+" as it can add, or concatenate, depending on if any of the operands are strings!
console.log( myVariable );

myVariable = myVariable.toString(); // Convert back to a string.
console.log( myVariable );

/**
 * Other types?
 */

 //Array:

 var myArrayOfDataTypes = [
     //Booleans:
     true,
     false,

     //Null:
     null,

     //Number (float/integer):
     34,
     168.793,

     //String:
     'Hello, World!'

     // Value not defined:
     undefined,

     //Not a number:

     NaN,

     // An array in an array!?

     [1, 2, 3, 4, 5]
 ];

 // Creating elements for a webpage. (Adding to the DOM!) //

 //Create datalist.

 var myDataList = document.createElement('DL'); //Won't show yet! We didn't tell it where to go.

 for ( var i = 0; i < myArrayOfDataTypes.length; i++)
 [ // (Assignment; Termination Condition; Iteration)
    //Create datalist.

    var dataListTitle = document.createElement('DT');
    dataListTitle.textContent = typeof myArrayOfDataTypes[i]; //output the datatype.

    
    var dataListTitle = document.createElement('DD');
    dataListData.textContent = typeof myArrayOfDataTypes[i]; 

    // Add our new elements to our datalist.
    myDataList.appendChild( dataListTitle );
    myDataList.appendChild( dataListData);
 ]