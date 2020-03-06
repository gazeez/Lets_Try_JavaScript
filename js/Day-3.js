//==========Objects again============//

var myObject = {
    firstName: 'Gafar',
    lastName: ' Azeez',
    sayHello: function () {
        var newP = document.createElement('p');
        newP.textContent = 'Hey there!';
        document.body.appendChild(newP);
        
        //dl = data list 
        //dd = data list data
        //dt = data list title
        document.body.innerHTML +=`
        <dl> 
            <dt> First Name: </dt>
            <dd> `+this.firstName+`</dd>
            <dt> Last Name: </dt>
            <dd> `+this.lastName+`</dd>
        
        </dl>
        `;
    }
}