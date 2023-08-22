export const products = [
	{
		id: 1,
		title: "ReDragon",
		desc: "Inalambrico",
		img: "https://redragon.es/content/uploads/2021/04/KUMARA.png",
		price: "$34.999",
		category: "Tech",
		tipo: "Teclado,"
	},
	{
		id: 2,
		title: "Corsair",
		desc: "Gamer",
		img: "https://www.liontech-gaming.com/wp-content/uploads/2021/12/SILLA-GAMER-CORSAIR-T3-RUSH-CHARCOAL.webp",
		price: "$204.000",
		category: "Tech",
		tipo: "Silla",
		
	},
	{
		id: 3,
		title: "Logitech",
		desc: "Gamer",
		img: "https://www.clickea.com.ar/admin/productos/05d5d10cb00661980f049ad1b4edf624.jpg ",
		price: "$4.600",
		category: "Tech",
		tipo: "Auriculares"
	},
	{
		id: 4,
		title: "BenQ GW2780",
		desc: "27 Pulgadas",
		img: "https://image.benq.com/is/image/benqco/gw2780-left45-2?$ResponsivePreset$&fmt=png-alpha",
		price: "$119.000",
		category: "Tech",
		tipo: "Monitor"
	},
	{
		id: 5,
		title: "Mut Z5 Tipo Z",
		desc: "120x60x70",
		img: "https://cougargaming.com/_cgrwdr_/wwdpp/wp-content/uploads/2020/07/mars-list-2.png",
		price: "$134.640",
		category: "SetUp",
		tipo: "Escritorio"
	},
	{
		id: 6,
		title: "Air Jordan 1 Mid Alternate Bred Toe",
		desc: "Red & Black",
		img: "https://izicop.com/cdn/shop/products/air-jordan-1-mid-alternate-bred-toe-1-1000.png?v=1656583149",
		price: "$134.640",
		category: "Ropa",
		tipo: "Zapatillas"
	},
];

export const updateProducts = (newProducts) => {
	products = newProducts;
  };