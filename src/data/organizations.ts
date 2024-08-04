interface Organization {
	id: string;
	date: string;
	name: string;
	inn: string;
	ogrn: string;
	status: "Действителен" | "Приостановлен" | "Отсутствует";
}

const getRandomInt = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateRandomInn = (): string => {
	return `${getRandomInt(1000000000, 9999999999)}`;
};

const generateRandomOgrn = (): string => {
	return `${getRandomInt(1000000000000, 9999999999999)}`;
};

const companyNames = [
	"ООО 'РАЙТ ПЕРСЕПШН'",
	"ООО 'ЯНДЕКС.МЕДИАСЕРВИСЫ'",
	"ООО 'ГАЗПРОМ'",
	"ООО 'СБЕРБАНК'",
	"ООО 'РОСНЕФТЬ'",
];

const organizations: Organization[] = Array.from(
	{ length: 40 },
	(_, index) => ({
		id: (22680 + index).toString(),
		date: "12 Февраля 2023",
		name: companyNames[getRandomInt(0, companyNames.length - 1)],
		inn: generateRandomInn(),
		ogrn: generateRandomOgrn(),
		status:
			index % 3 === 0
				? "Действителен"
				: index % 3 === 1
				? "Приостановлен"
				: "Отсутствует",
	})
);

export default organizations;
