/* eslint-disable @next/next/no-img-element */
"use client";
import { getCookies, setCookie, deleteCookie, getCookie } from "cookies-next";
import { useTheme } from "next-themes";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { DarkModeToggle } from "@/components/themes/dark-mode-toggle";

type NavLink = {
	label: string;
	href: string;
};

interface Props {
	openNav: () => void;
	isNavOpen: boolean;
}

interface NavbarProps {
	className?: string;
}

const navLinks: NavLink[] = [
	{ label: "Home", href: "/" },
	{ label: "About", href: "/about" },
	{ label: "Services", href: "/services" },
	{ label: "Doctors", href: "/doctors" },
	{ label: "Contact Us", href: "/contact" },
	{ label: "Careers", href: "/careers" },
];

const Navi = ({ openNav, isNavOpen }: Props & { isNavOpen: boolean }) => {
	const pathname = usePathname();
	const auth = getCookie("Auth");
	const { theme, systemTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const getLinkClass = (href: string) => {
		const isActive = pathname === href;
		if (!mounted) return isActive ? "text-[#31ADDB]" : "text-black";

		const currentTheme = theme === "system" ? systemTheme : theme;
		return isActive
			? "text-[#31ADDB]"
			: currentTheme === "dark"
			? "text-white"
			: "text-black";
	};

	if (!mounted) {
		return null; // or a loading spinner
	}

	const currentTheme = theme === "system" ? systemTheme : theme;

	return (
		<div
			className={`fixed top-0 left-0 right-0 z-50 ${
				currentTheme === "dark" ? "bg-gray-900" : "bg-white"
			} shadow-md`}>
			<nav className="navi">
				{/* Logo */}
				<Link href="/" legacyBehavior>
					<a>
						<div className="flex gap-4 items-center justify-center">
							<img src="/logos/DR.png" alt="Logo" className="h-12 w-12" />
							<p className="text-[#31ADDB] text-3xl font-semibold italic hidden md:block">
								Dr.{" "}
								<span
									className={`${
										currentTheme === "dark" ? "text-[#125872]" : "text-[#125872]"
									}`}>
									Reach
								</span>
							</p>
						</div>
					</a>
				</Link>

				{/* Menu List */}
				<ul
					className={`flex justify-between space-x-4 ${
						currentTheme === "dark" ? "text-white" : "text-[#171718]"
					}`}>
					{navLinks.map((link, index) => (
						<li key={index}>
							<Link href={link.href} legacyBehavior>
								<a
									className={`navi-link font-[590] ${getLinkClass(link.href)}`}>
									{link.label}
								</a>
							</Link>
						</li>
					))}
				</ul>
				<div className="flex space-x-4 items-center justify-center">
					{/* CTA */}

					<div className="hidden md:block">
						<div className="flex gap-2 ">
							<Link
								className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg"
								href={`${auth ? `/dashboard` : `/auth/login`}`}>
								{" "}
								{auth ? `Dashboard` : `Get Started`}{" "}
							</Link>

							{auth && (
								<div
									onClick={() => {
										deleteCookie("Auth");
										location.reload();
									}}
									className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg">
									{" "}
									Logout{" "}
								</div>
							)}
						</div>
					</div>
					{/* Dark Mode */}
					<DarkModeToggle />
					{/* Mobile Menu Icon */}
					<div onClick={openNav} className="block lg:hidden">
						<div className="relative w-[2rem] h-[2rem]">
							<Bars3Icon
								className={`w-full h-full cursor-pointer text-[#31ADDB] font-extrabold absolute transition-opacity duration-300 ${
									isNavOpen ? "opacity-0" : "opacity-100"
								}`}
							/>
							<XMarkIcon
								className={`w-full h-full cursor-pointer text-[#31ADDB] font-extrabold absolute transition-opacity duration-300 ${
									isNavOpen ? "opacity-100" : "opacity-0"
								}`}
							/>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

interface MobileNavProps {
	nav: boolean;
	closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: MobileNavProps) => {
	const pathname = usePathname();
	const navAnimation = nav ? "translate-y-0" : "translate-y-[-100%]";
	const auth = getCookie("Auth");
	const { theme, systemTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const getLinkClass = (href: string) => {
		const isActive = pathname === href;
		if (!mounted) return isActive ? "text-[#31ADDB]" : "text-black";

		const currentTheme = theme === "system" ? systemTheme : theme;
		return isActive
			? "text-[#31ADDB]"
			: currentTheme === "dark"
			? "text-white"
			: "text-black";
	};

	if (!mounted) {
		return null; // or a loading spinner
	}

	const currentTheme = theme === "system" ? systemTheme : theme;

	return (
		<>
			{/* Overlay */}
			{nav && (
				<div
					className="fixed inset-0 bg-black bg-opacity-50 z-40"
					onClick={closeNav}></div>
			)}
			<div
				className={`fixed ${navAnimation} lg:hidden block transform transition-all duration-300 h-[500px] top-12 left-0 right-0 bottom-0 z-50 ${
					currentTheme === "dark" ? "bg-gray-800" : "bg-[#f3f4f6]"
				}`}>
				<div className="w-[100vw] h-[52vh] sm:h-[40vh] flex flex-col items-center z-[10] justify-center">
					{navLinks.map((link, index) => (
						<div key={index} className="nav-link-mobile">
							<Link href={link.href} legacyBehavior>
								<a className={getLinkClass(link.href)}>{link.label}</a>
							</Link>
						</div>
					))}
					{/* CTA */}
					<div className="flex-col items-center justify-center gap-4">
						<div className="pb-2">
							<Link href={`${auth ? `/dashboard` : `/auth/register`}`}>
								<button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg">
									{" "}
									{auth ? `Dashboard` : `Get Started`}{" "}
								</button>
							</Link>
						</div>
						<div>
							{auth && (
								<button
									onClick={() => {
										deleteCookie("Auth");
										location.reload();
									}}
									className="bg-orange-500 hover:bg-orange-700 text-white text-center font-bold py-2 px-[1.85rem] rounded-lg">
									{" "}
									Logout{" "}
								</button>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

const Navbar: React.FC<NavbarProps> = ({ className }) => {
	const [nav, setNav] = useState(false);
	const openNav = () => setNav(!nav);
	const closeNav = () => setNav(false);
	const { setTheme } = useTheme();

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme) {
			setTheme(savedTheme);
		}
	}, [setTheme]);

	return (
		<nav className={className}>
			<MobileNav nav={nav} closeNav={closeNav} />
			<Navi openNav={openNav} isNavOpen={nav} />
		</nav>
	);
};

export default Navbar;
