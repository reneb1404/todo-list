import NavBar from "@/src/shared/ui/NavBar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "ToDoIt",
	description: "Just do it!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" data-theme="darkMode" className="bg-base-200">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<NavBar />
				{children}
			</body>
		</html>
	);
}
