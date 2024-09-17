import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";
import { Cabecalho } from "./components/Cabecalho/Cabecalho";

const inter = localFont({
	src: "../assets/fonts/inter.woff2",
	variable: "--font-inter",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR" className="dark">
				<body className={`${inter.variable} antialiased`}>
			<Providers>
					<Cabecalho />
					{children}
			</Providers>
				</body>
		</html>
	);
}
