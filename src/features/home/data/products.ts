export const getProducts = (t: (key: string) => string) => [
	{
		id: "50kva",
		capacity: t("items.p50"),
		image: "/products/50kva.webp",
	},
	{
		id: "100kva",
		capacity: t("items.p100"),
		image: "/products/100kva.webp",
	},
	{
		id: "250kva",
		capacity: t("items.p250"),
		image: "/products/250kva.webp",
	},
	{
		id: "500kva",
		capacity: t("items.p500"),
		image: "/products/500kva.webp",
	},
	{
		id: "1000kva",
		capacity: t("items.p1000"),
		image: "/products/1000kva.webp",
	},
];
