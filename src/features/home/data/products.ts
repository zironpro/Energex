export const getProducts = (t: (key: string) => string) => [
	{
		id: "50kva",
		capacity: t("items.p50"),
		image: "/products/50kva.png",
	},
	{
		id: "100kva",
		capacity: t("items.p100"),
		image: "/products/100kva.png",
	},
	{
		id: "250kva",
		capacity: t("items.p250"),
		image: "/products/250kva.png",
	},
	{
		id: "500kva",
		capacity: t("items.p500"),
		image: "/products/500kva.png",
	},
	{
		id: "1000kva",
		capacity: t("items.p1000"),
		image: "/products/1000kva.png",
	},
];
