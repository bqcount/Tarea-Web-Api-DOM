const costOfUnit = document.getElementsByClassName("cost-u");

const qty = document.getElementsByClassName("qty");

const total = document.getElementsByClassName("total-cost");

const container = document.getElementById("container");

const btnCalcCost = document.getElementById("btn-calc");
let btnDelete = document.getElementsByClassName("btn-delete");
const btnCreate = document.getElementById("btn-create");

let totalPrice = 0;
let totalH2 = document.getElementById("totalPrice");

// Si el h2 para mostrar el precio total no existe, lo crea
if (!totalH2) {
  totalH2 = document.createElement("h2");
  totalH2.id = "totalPrice";
  container.appendChild(totalH2); 

function getPriceByProduct() {
  const totalP = document.getElementsByClassName("big-div");

  totalPrice = 0; 

  for (let i = 0; i < costOfUnit.length; i++) {
    let newTotal = costOfUnit[i].innerText * qty[i].value;
    total[i].innerText = newTotal + "€ ";

    totalPrice += newTotal;
  }

  totalH2.innerText = "Total Price: " + totalPrice + "€";
}


function deleteItem(e) {
  const bigDiv = document.getElementById("big-div");

  console.log(e.currentTarget)
  bigDiv.removeChild(e.currentTarget.parentNode);
}

for (let i = 0; i < btnDelete.length; i++) {
  btnDelete[i].addEventListener("click", deleteItem);
}

btnCalcCost.addEventListener("click", getPriceByProduct);

function createNewItem() {
  const totalP = document.getElementById("big-div");
  // Toma los valores de los input
  let productName = document.getElementById("new-product-name");
  let productPrice = document.getElementById("price");
  parseInt(productPrice);

  btnCreate.addEventListener("click", () => {

    const test = document.createElement('div');
    test.setAttribute('class','row-div')
    test.innerHTML = ` 
    <div id="new-product-name">
    <span>${productName.value}</span>
  </div>
  <div class="cost-u">
    <span >${productPrice.value}</span>
  </div>
  <div>
    <label for="qty">QTY</label>
    <input class="qty" type="number">
  </div>
  <div >
    <span class="total-cost">$0</span>
  </div>
  <div>

  </div >
  <button class="btn-delete"> Delete</button>
  `;
     
  
    totalP.appendChild(test);

    btnDelete = document.getElementsByClassName("btn-delete");
   
    for (let i = 0; i < btnDelete.length; i++) {
      btnDelete[i].addEventListener("click", deleteItem);
    }

    productName.value =""
    productPrice.value =""
  });

}

createNewItem();

}