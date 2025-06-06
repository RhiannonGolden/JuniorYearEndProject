let data, Clothing, clothes, clothingList;

function initCards(){
  $.ajaxSetup({async: false});

  let link = "https://8011f09e-599f-40eb-813e-481c282bfefe-00-2df3xnalwckzl.worf.replit.dev";
  let route = "/Clothing";


    Clothing = $.getJSON(link+ route).responseJSON;

  generateCards(Clothing);
}

function generateCards(Clothing){
  let output = document.getElementById("output");
  output.innerHTML = "";

  let front = "";
  let back = "";

  for(let i = 0; i < Clothing.length; i++){
    let clothes = Clothing[i];

    front = `<div class="card">`;
    front += `<hr>`;
    front += `<h3> Item ID: ${clothes.ItemID}</h3>`;
    front += `<div> Item Type: ${clothes.ItemName}</div>`;
    front += `<br>`;
    front += `<div> Item Material: ${clothes.Material}</div>`;
    front += `<p> Price: ${clothes.Price}</p>`;
    front += `<p> Color: ${clothes.Color}</p>`;
    front += `<hr>`;
    front += `</div>`;

    back = `<div class="card">`;
    back += `<img src="${clothes.ImageURL}">`;
    back += `</div>`;

    let card = new FlipCard(front, back);
    card.render("output");
  }
}


function filter(){
  let color = document.getElementById("color").value;
  console.log(color);

  let clothingList = [];

  for(let i=0; i<Clothing.length;i++){
    let clothes = Clothing[i]
   
    if( clothes.Color == color ) {
          clothingList.push(clothes);
       }
  }

  generateCards(clothingList);

}