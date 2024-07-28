export interface NavItem {
	name: string;
	path: string;
}

export const navItems: NavItem[] = [
	{ name: "О комитете", path: "/" },
	{ name: "Деятельность", path: "activities" },
	{ name: "Единый реестр", path: "registry" },
	{ name: "Контакты", path: "contacts" },
];
