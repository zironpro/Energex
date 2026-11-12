import { PRODUCTS } from "@/features/products/data/products";

export const getProducts = (t: (key: string) => string) =>
	PRODUCTS.map((product) => ({
		id: `${product.kva}kva`,
		slug: product.slug,
		capacity: t(`items.${product.key}`),
		image: product.image,
	}));
