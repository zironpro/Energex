export const getProducts = (t: (key: string) => string) => [
	{
		title: t("items.p50.title"),
		description: t("items.p50.description"),
		image: "/products/50kva.png",
		specs: [
			t("items.p50.specs.0"),
			t("items.p50.specs.1"),
			t("items.p50.specs.2"),
			t("items.p50.specs.3"),
		],
	},
	{
		title: t("items.p100.title"),
		description: t("items.p100.description"),
		image: "/products/100kva.png",
		specs: [
			t("items.p100.specs.0"),
			t("items.p100.specs.1"),
			t("items.p100.specs.2"),
			t("items.p100.specs.3"),
		],
	},
	{
		title: t("items.p250.title"),
		description: t("items.p250.description"),
		image: "/products/250kva.png",
		specs: [
			t("items.p250.specs.0"),
			t("items.p250.specs.1"),
			t("items.p250.specs.2"),
			t("items.p250.specs.3"),
		],
	},
	{
		title: t("items.p500.title"),
		description: t("items.p500.description"),
		image: "/products/500kva.png",
		specs: [
			t("items.p500.specs.0"),
			t("items.p500.specs.1"),
			t("items.p500.specs.2"),
			t("items.p500.specs.3"),
		],
	},
	{
		title: t("items.p1000.title"),
		description: t("items.p1000.description"),
		image: "/products/1000kva.png",
		specs: [
			t("items.p1000.specs.0"),
			t("items.p1000.specs.1"),
			t("items.p1000.specs.2"),
			t("items.p1000.specs.3"),
		],
	},
];
