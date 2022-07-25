let shop = document.getElementById('shop');

//console.log(shop)

let shopItems = [
	{
		id: 'pid1',
		name: 'Casual Shirt',
		price: 45,
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
		img: 'images/img-1.jpg',
	},
	{
		id: 'pid2',
		name: 'Office Shirt',
		price: 100,
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
		img: 'images/img-2.jpg',
	},
	{
		id: 'pid3',
		name: 'T Shirt',
		price: 25,
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
		img: 'images/img-3.jpg',
	},
	{
		id: 'pid4',
		name: 'Suit Shirt',
		price: 300,
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
		img: 'images/img-4.jpg',
	},
	{
		id: 5,
		name: 'Suit Shirt',
		price: 300,
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
		img: 'images/img-4.jpg',
	},
	{
		id: 6,
		name: 'Suit Shirt',
		price: 300,
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
		img: 'images/img-4.jpg',
	},
	{
		id: 6,
		name: 'Suit Shirt',
		price: 300,
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
		img: 'images/img-4.jpg',
	},{
		id: 6,
		name: 'Suit Shirt',
		price: 300,
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
		img: 'images/img-4.jpg',
	},
	{
		id: 6,
		name: 'Suit Shirt',
		price: 300,
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
		img: 'images/img-4.jpg',
	},
	{
		id: 6,
		name: 'Suit Shirt',
		price: 300,
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
		img: 'images/img-4.jpg',
	},
	{
		id: 6,
		name: 'Suit Shirt',
		price: 300,
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
		img: 'images/img-4.jpg',
	}
];

let basket = [];

let generateShop = () => {
	return (shop.innerHTML = shopItems
		.map(x => {
			let { id, name, price, desc, img } = x;
			return `<div id=product-id-${id} class="item">
		<img width="220" src=${img} alt="" srcset="">
		<div class="details">
        <h3>${name}</h3>
        <p>${desc}.</p>
        <div class="price-quantity">
            <h3 class="price">$ ${price}</h3>
            <span class="buttons">
				<i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                	<div id=${id} class="quantity">0</div>
                <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
            </span>
        </div>
    </div>
		</div>`;
		})
		.join(''));
};

generateShop();

let increment = id => {
	let selectedItem=id;
	let search = basket.find((x) => x.id === selectedItem.id);

	if(search===undefined){
		basket.push({
			id:selectedItem.id,
			item:1
		})
	}
	else{
		search.item++;
	}

	//console.log(basket)

};

let decrement = id => {
	let selectedItem=id;
	let search = basket.find((x) => x.id === selectedItem.id);

	if(search.item===0) return ;
	else{
		search.item--;
	}

	//console.log(basket)
};

let update = () => {};
