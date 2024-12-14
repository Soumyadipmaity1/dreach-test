"use client";

import "./globals.css";
import { ubuntu, ubuntuMono } from "@/@types/font/Font";
import { Providers } from "./providers";
import { ThemeProvider } from "@/components/themes/theme-provider";
import { usePathname } from "next/navigation";
import DashboardLayout from "./dashboard/layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const pathName = usePathname();
	const showNavbar = [
		"/",
		"/about",
		"/careers",
		"/contact",
		"/doctors",
		"/services",
		"/appointment",
	].includes(pathName);

	const showFooter = [
		"/",
		"/about",
		"/careers",
		"/contact",
		"/doctors",
		"/services",
		"/appointment",
	].includes(pathName);

	const Route = pathName.startsWith("/dashboard");

	if (Route) {
		return (
			<html lang="en">
				<body className={ubuntu.className}>
					<main>
						<DashboardLayout>{children}</DashboardLayout>
					</main>
					<ToastContainer
						position="bottom-right"
						autoClose={5000}
						hideProgressBar
					/>
				</body>
			</html>
		);
	} else {
		return (
			<html lang="en">
				<body
					className={`${ubuntu.variable} ${ubuntuMono.variable} antialiased`}>
					<Providers>
						<ThemeProvider
							attribute="class"
							defaultTheme="light"
							enableSystem
							disableTransitionOnChange>
							{showNavbar && <Navbar />}
							<div className={`pt-[73.49px] md:pt-[81.3px]`}>{children}</div>
							{showFooter && <Footer />}
							<ToastContainer
								position="bottom-right"
								autoClose={5000}
								hideProgressBar
							/>
						</ThemeProvider>
					</Providers>
				</body>
			</html>
		);
	}
}
