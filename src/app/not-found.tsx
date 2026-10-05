import { redirect } from "next/navigation";

export default function GlobalNotFound() {
	// For unlocalized URLs that shouldn't be redirected by middleware,
	// just show a 404 or redirect to the English 404.
	// We'll render a basic 404 that doesn't need translations.
	return (
		<html>
			<body>
				<div style={{ display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif' }}>
					<div style={{ textAlign: 'center' }}>
						<h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#2563eb', marginBottom: '1rem' }}>404</h1>
						<h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Page Not Found</h2>
						<a href="/en" style={{ color: '#2563eb', textDecoration: 'none' }}>Go back to homepage</a>
					</div>
				</div>
			</body>
		</html>
	);
}
