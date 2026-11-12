export interface ProductCatalogItem {
	key: "p50" | "p100" | "p250" | "p500" | "p1000";
	slug: string;
	kva: number;
	kw: number;
	image: string;
}

export const PRODUCTS: ProductCatalogItem[] = [
	{
		key: "p50",
		slug: "50-kva-silent-diesel-generator",
		kva: 50,
		kw: 40,
		image: "/products/50kva.webp",
	},
	{
		key: "p100",
		slug: "100-kva-commercial-diesel-generator",
		kva: 100,
		kw: 80,
		image: "/products/100kva.webp",
	},
	{
		key: "p250",
		slug: "250-kva-industrial-power-generator",
		kva: 250,
		kw: 200,
		image: "/products/250kva.webp",
	},
	{
		key: "p500",
		slug: "500-kva-heavy-duty-generator-set",
		kva: 500,
		kw: 400,
		image: "/products/500kva.webp",
	},
	{
		key: "p1000",
		slug: "1000-kva-prime-power-generator",
		kva: 1000,
		kw: 800,
		image: "/products/1000kva.webp",
	},
];

export function getProductBySlug(slug: string): ProductCatalogItem | undefined {
	return PRODUCTS.find((product) => product.slug === slug);
}

export function getRelatedProducts(slug: string): ProductCatalogItem[] {
	return PRODUCTS.filter((product) => product.slug !== slug);
}

