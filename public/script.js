const list = document.querySelector('.list');
const products = {
    1: {
        "name": 'tomato',
        "price": '77.5'
    },
    2: {
        "name": 'onion',
        "price": '65'
    }
    
}
let item = [];
let bill = [];

function addToCart(x) {
    const span = `<span class="price">${products[x].price} Rs</span>`
    const result = products[x].name + "\t" + span;
    if (item.includes(products[x]) === false) item.push(result);
    bill.push(products[x].price);
    alert("added to cart");

}

function cart() {
    list.innerHTML = "";
    for (let i = 0; i < item.length; i++) {
        let text = item[i];
        let listItem = document.createElement("LI");
        listItem.innerHTML = text;
        list.appendChild(listItem);
        listItem.style.textAlign = 'left';
    }
    const btn = document.querySelector('.bill');
    const total = bill.reduce(add);

    function add(accumulator, a) {
        return parseInt(accumulator) + parseInt(a);
    }
    console.log(total);
    btn.innerHTML = `Total Bill is ${total} Rs`;
}