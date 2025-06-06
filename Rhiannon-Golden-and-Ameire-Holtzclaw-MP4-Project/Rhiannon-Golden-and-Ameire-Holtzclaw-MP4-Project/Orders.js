let data, Orders, orders, orderList;

function initCards(){
  $.ajaxSetup({async: false});

  let link = "https://8011f09e-599f-40eb-813e-481c282bfefe-00-2df3xnalwckzl.worf.replit.dev";
  let route = "/Orders";


      Orders = $.getJSON(link+ route).responseJSON;

  generateCards(Orders);
}

function generateCards(Orders){
  let output = document.getElementById("output");
  output.innerHTML = ""; // clear out the container

  let front = "";
  let back = "";

  for(let i = 0; i < Orders.length; i++){
    let orders = Orders[i];

    front = `<div class="card">`;
    front += `<hr>`;
    front += `<h3> Order ID: ${orders.OrderID}</h3>`;
    front += `<div> Date Ordered: ${orders.DateOrdered}</div>`;
    front += `<br>`;
    front += `<div> Item ID: ${orders.ItemID}</div>`;
    front += `<hr>`;
    front += `</div>`;

    back = `<div class="card">`;
    back += `<h3> ${orders.FirstName} ${orders.LastName} </h3>`;
    back += `<p> Customer ID: ${orders.CustomerID} </p>`;
    back += `<hr>`;
    back += `<p> ${orders.Address}, ${orders.Country}</p>`;
    back += `</div>`;

    let card = new FlipCard(front, back);
    card.render("output");
  }
}


function filter(){
  let country = document.getElementById("country").value;

  let orderList = [];

  for(let i=0; i<Orders.length;i++){
    let orders = Orders[i]
    if( orders.Country == country ) {
      orderList.push(orders);
       }

  }
  generateCards(orderList);

}