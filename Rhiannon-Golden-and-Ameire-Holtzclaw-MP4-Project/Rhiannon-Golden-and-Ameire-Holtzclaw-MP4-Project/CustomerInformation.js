let data, Customers, customer, nameList;

function init(){
  $.ajaxSetup({async: false});

  let link = "https://8011f09e-599f-40eb-813e-481c282bfefe-00-2df3xnalwckzl.worf.replit.dev";
  let route= "/Customers"
  Customers = $.getJSON(link+route).responseJSON;

  Cards(Customers)


}


function Cards(Customers){
  let mainpanel = document.getElementById("output");
  let build ="";

  for(let i=0; i < Customers.length; i++){
    let customer = Customers[i]
    build += `<div class="card styles">`
    build += `<div class = "inside">`;
    build += `<br>`;
    build += `<h3> Customer ID: ${customer.CustomerID}</h3>`;
    build += `<h4> ${customer.FirstName} ${customer.LastName} </h4>`;
    build += `<div> ${customer.Email} </div>`;
    build += `<p> ${customer.Address} </p>`;
    build += `<br>`;
    build += `</div>`
    build += `</div>`;
  }


  mainpanel.innerHTML = build;


}


function filter(){
  let name = document.getElementById("name").value;

  let nameList = [];

  for(let i=0; i<Customers.length;i++){
    let customer = Customers[i]
    if (customer.FirstName == name || 
      customer.LastName == name ||
      `${customer.FirstName} ${customer.LastName}` == name) {
    nameList.push(customer);
       }
  }
  Cards(nameList);

}