import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'Marek Basiul',
	description: 'W stronę piękna: Sztuka tradycyjna',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`w-full h-full antialiased bg-dark`}>{children}</body>
		</html>
	);
}
