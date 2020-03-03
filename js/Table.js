let Tables = [
    // { name: "Name", Age: Age, School: "School", City:"City"},
    { name: "Bob", Age: 30, School: "Programming", City:"Edmonton"},
    { name: "Sarah", Age: 52 , School: "Swimming", City:"Calgary"},
    { name: "Gafar", Age: 31, School: "Software Developer", City:"Toronto"}
    
  ];


function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
  }
}


  function generateTable(table, data) {
    for (let element of data) {
      let row = table.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }
  let table = document.querySelector("table");
  let data = Object.keys(Tables[0]);
  generateTableHead(table, data);
  generateTable(table, Tables );
  
//   <th>Name</th><!-- Enter a heading per column... -->
//   <th>Age</th>
//   <th>School Class</th>
//   <th>City</th>
// </tr>
// </thead>
// <tbody><!-- Table body contains your data! -->
// <tr><!-- Each row requires a "tr". -->
//   <td>Bob</td><!-- Each cell in a row is "table data". Make sure it is the number of columns you are using. -->
//   <td>30</td>
//   <td>Programming</td>
//   <td>Edmonton</td>
// </tr>
// <tr>
//   <td>Sarah</td>
//   <td>52</td>
//   <td>Swimming</td>
//   <td>Calgary</td>