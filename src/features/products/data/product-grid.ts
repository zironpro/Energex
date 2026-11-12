import { PRODUCTS } from "./products";

export const getProducts = (t: (key: string) => string) =>
	PRODUCTS.map((product) => ({
		key: product.key,
		slug: product.slug,
		kva: product.kva,
		kw: product.kw,
		title: t(`items.${product.key}.title`),
		description: t(`items.${product.key}.description`),
		image: product.image,
		specs: [
			t(`items.${product.key}.specs.0`),
			t(`items.${product.key}.specs.1`),
			t(`items.${product.key}.specs.2`),
			t(`items.${product.key}.specs.3`),
		],
	}));
