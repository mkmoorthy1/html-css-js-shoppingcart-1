let label = document.getElementById('label');

let shoppingCart = document.getElementById('shopping-cart');

console.log(shopItems);

let basket = JSON.parse(localStorage.getItem('data')) || [];

//console.log(basket)

let calculation = () => {
	//console.log("calculation is running")
	let cartIcon = document.getElementById('cartAmt');
	let total = basket.map(x => x.item).reduce((x, y) => x + y, 0);
	cartIcon.innerHTML = total;
};

calculation();

let generateCartItems = () => {
	if (basket.length !== 0) {
		//console.log("Basket is not empty")
		shoppingCart.innerHTML = basket
			.map(x => {
				let { id, item } = x;
				let search = shopItems.find(y => y.id === id) || [];
				let{ img,name,price}=search;
				return `<div class="cart-item">
                            <img width="50%" height="150" src="${img}" alt="" />
                            <div class="details">
                                <div class="title-price-x">
                                    <h4 class="title-price">
                                        <p class="cart-item-name">${name}</p>
                                        <p class="cart-item-price">$ ${price}</p>
                                    </h4>
                                    <button class="btnDelete" onClick=removeItem(${id})>Delete</button>
                                </div>
                                <div class="cart-buttons" style="padding-left:10px;padding-top:15px;">
                                    <div class="buttons">
                                    <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                                    <div id=${id} class="quantity">${item}</div>
                                    <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                                    </div>
                                </div>
								<h3 style="margin-top:40px;">$ ${item * search.price}</h3>
                            </div>
                        </div>`;
			})
			.join('');
	} else {
		console.log('basket is empty');
		//console.log("Basket is empty")
		shoppingCart.innerHTML = ``;
		label.innerHTML = `<h2>
                            <p>Cart Is Empty</p>
                            <a href="../index.html" >
                                    <button class="HomeBtn">Back To Home</button>
                            </a>
                        </h2>`;
	}
};

generateCartItems();


let increment = id => {
	let selectedItem = id;
	let search = basket.find(x => x.id === selectedItem.id);

	if (search === undefined) {
		basket.push({
			id: selectedItem.id,
			item: 1,
		});
	} else {
		search.item++;
	}

	//console.log(basket)

	generateCartItems();
	

	update(selectedItem.id);

	localStorage.setItem('data', JSON.stringify(basket));
};

let decrement = id => {
	let selectedItem = id;
	let search = basket.find(x => x.id === selectedItem.id);

	if (search === undefined) return;
	else if (search.item === 0) return;
	else {
		search.item--;
	}

	//console.log(basket)
	update(selectedItem.id);

	basket = basket.filter(x => x.item !== 0);

	generateCartItems()

	localStorage.setItem('data', JSON.stringify(basket));
};

let update = id => {
	//console.log(id)
	let search = basket.find(x => x.id === id);
	//console.log(search.item)
	document.getElementById(id).innerHTML = search.item;
	calculation();
	totalAmount();
};

let removeItem=(id)=>{
	console.log(id)

	let selectedItem= id;
	//console.log(selectedItem.id)

	basket=basket.filter(x=>x.id !== selectedItem.id)


	generateCartItems();

	totalAmount();

	calculation();

	localStorage.setItem('data', JSON.stringify(basket));



}


let totalAmount=()=>{
	if (basket.length !== 0) {

		let amount=basket.map((x)=>{
			let { id, item } = x;
			let search = shopItems.find(y => y.id === id) || [];
			return search.price * item
		}).reduce((x,y)=>x+y,0)
		console.log(amount)

		label.innerHTML=`
				<h2>Total Bill $: ${amount}</h2>
				<button class="checkout">CheckOut</button>
				<button class="removeAll" onclick="clearCart()">Clear All</button>
		`
	}
	else{
		return
	}
}

totalAmount();

let clearCart=()=>{
	basket=[];
	generateCartItems();
	calculation();
	localStorage.setItem('data',JSON.stringify(basket));
}