export interface SolutionCatalogItem {
	slug: string;
	key: "crane";
	image: string;
	badgeKey: string;
	titleKey: string;
	descriptionKey: string;
	pointsKeys: string[];
}

export const SOLUTIONS_CATALOG: SolutionCatalogItem[] = [
	{
		slug: "100-kva-generator-for-tower-crane",
		key: "crane",
		image: "/services/100-kva-generator-for-tower-crane.webp",
		badgeKey: "catalog.crane.badge",
		titleKey: "catalog.crane.title",
		descriptionKey: "catalog.crane.description",
		pointsKeys: [
			"catalog.crane.point0",
			"catalog.crane.point1",
			"catalog.crane.point2",
		],
	},
];

export const ALL_SOLUTION_SLUGS = SOLUTIONS_CATALOG.map((item) => item.slug);

export function getSolutionBySlug(
	slug: string
): SolutionCatalogItem | undefined {
	return SOLUTIONS_CATALOG.find((item) => item.slug === slug);
}
