let shop = document.getElementById('shop');

//console.log(shop)

let shopItems = [
	{
		id: 1,
		name: 'Casual Shirt',
		price: 45,
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
		img: 'images/img-1.jpg',
	},
	{
		id: 2,
		name: 'Office Shirt',
		price: 100,
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
		img: 'images/img-2.jpg',
	},
	{
		id: 3,
		name: 'T Shirt',
		price: 25,
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
		img: 'images/img-3.jpg',
	},
	{
		id: 4,
		name: 'Suit Shirt',
		price: 300,
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
		img: 'images/img-4.jpg',
	},
];

let generateShop = () => {
	return (shop.innerHTML = shopItems.map(x => {
		return `<div id="product-id-${x.id}" class="item">
    <img width="220" src=${x.img} alt="" srcset="">
    <div class="details">
        <h3>${x.name}</h3>
        <p>${x.desc}.</p>
        <div class="price-quantity">
            <h3 class="price">$ ${x.price}</h3>
            <span class="buttons">
                <i class="bi bi-dash-lg"></i>
                <div id=${x.id} class="quantity">0</div>
                <i class="bi bi-plus-lg"></i>
            </span>
        </div>
    </div>
</div>`;
	}));
};

generateShop();

let increment=()=>{

}


