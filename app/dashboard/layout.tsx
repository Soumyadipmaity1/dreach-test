import { ubuntu, ubuntuMono } from "@/@types/font/Font";
import { RNChildProp } from "@/@types/interface/Interface";
import React from "react";
import { Providers } from "../providers";
import { ThemeProvider } from "@/components/themes/theme-provider";

const DashboardLayout: React.FC<RNChildProp> = ({ children }: RNChildProp) => {
	return (
		<main className={`${ubuntu.variable} ${ubuntuMono.variable} antialiased`}>
			<Providers>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange>
					<div>{children}</div>
				</ThemeProvider>
			</Providers>
		</main>
	);
};

export default DashboardLayout;
