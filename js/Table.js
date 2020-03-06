// Table Exercise

// First Capture the form!

var myForm = document.getElementById( 'table-form');

// =======================Delete table row element (assuming we click our 'tr > td > button' element. ==================================)

function deleteRow( element){// element will be the button we pressed.
  var tableRow = element.parentNode.parentNode; //2 level up from our button, to get our row.
  tableRow.parentNode.removeChild( tableRow ); // An element cannot delete itself...so we have to tell the parent to do it for us!
}

//Grab existing buttons.

var allButtons = document.querySelectorAll ( 'td > button');

// Loop through our query selected buttons

for (var i = 0; i < allButtons.length; i++){
  //let's add listeners to these
  allButtons[i].addEventListener( 'click', function (event){
    deleteRow( this );
  });
}


// Listen for a form submission...

myForm.addEventListener( 'submit', function ( event){ 
  // Prevent the form from ACTUALLY submitting (would leave or refresh the page, terminating our script.)
  event.preventDefault();

  // Grab your input elements.

  var nameField = document.querySelector ( 'form > label > input'); //Gets first input (name field)
  var ageField = document.getElementById ( 'age' );
  var schoolClassField = document.getElementById( 'school-class');
  var cityField = document.getElementById( 'city' );

  //Extract the values.
  var nameValue        = nameField.value;
  var ageValue         = ageField.value;
  var schoolClassValue = schoolClassField.value;
  var cityValue        = cityField.value;
 
  //Create new element (table row.)
  var newRow = document.createElement( 'TR');

    //Create new cell for the row (table data.)
    var nameCell = document.createElement( 'TD' );
    nameCell.textContent = nameValue; //Add our text to the cell
    newRow.appendChild ( nameCell); //Add our cell to the table row.

    //Create new cell for the row (table data.)
    var ageCell = document.createElement( 'TD' );
    ageCell.textContent = ageValue; //Add our text to the cell
    newRow.appendChild ( ageCell); //Add our cell to the table row.

    //Create new cell for the row (table data.)
    var schoolClassCell = document.createElement( 'TD' );
    schoolClassCell.textContent = schoolClassValue; //Add our text to the cell
    newRow.appendChild ( schoolClassCell); //Add our cell to the table row.


    //Create new cell for the row (table data.)
    var cityCell = document.createElement( 'TD' );
    cityCell.textContent = cityValue; //Add our text to the cell
    newRow.appendChild ( cityCell); //Add our cell to the table row.

    //create our delete button
    var deleteButton = document.createElement( 'BUTTON');
    deleteButton.textContent = 'Delete Row'; //Add some text.

    //These elements are being dynamically added - the event listener we
    //added earlier wouldn't see it! We have to add event listeners as 
    //we're making them instead here.
    deleteButton.addEventListener( 'click', function (event){
      deleteRow( this); //Delete the row!

      //In this case, "this" is the element the event is happening to!
      //Remember objects? we used "this" to refer to itself there too!
    });

    
    var actionCell = document.createElement( 'TD'); //CREATE THE ACTION CELL

    actionCell.appendChild(deleteButton);  //add the button inside.
    newRow.appendChild( actionCell); //DONT FORGET TO ADD THIS NEW CELL TO THE ROW TOO


  
    //Target your table body.
    var tableBody = document.getElementById( 'table-body' );
    tableBody.appendChild( newRow); // Inject the brand new row, so the user can see it! Yay!
});