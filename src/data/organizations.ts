interface Certificate {
	number: string;
	serial: string;
	issueDate: string;
	validUntil: string;
	firstInspectionDate: string;
	firstInspectionPassed: boolean;
	secondInspectionDate: string;
	secondInspectionPassed: boolean;
	subject: string;
	auditors: string;
	pdfLink: string;
}

export interface Organization {
	id: string;
	date: string;
	name: string;
	fullName: string;
	shortName: string;
	inn: string;
	ogrn: string;
	status: "Действителен" | "Приостановлен" | "Отсутствует";
	legalAddress: string;
	activityAddress: string;
	director: string;
	certificate: Certificate;
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

const directors = [
	"Семихатов Михаил Владимирович",
	"Иванов Иван Иванович",
	"Петров Петр Петрович",
	"Сидоров Сидор Сидорович",
	"Михайлова Елена Сергеевна",
];

const subjects = [
	'ГОСТ Р 52069-2013 "Защита информации. Система стандартов. Основные положения"',
	'ГОСТ Р 52100-2020 "Системы менеджмента качества. Требования"',
	'ГОСТ Р 55000-2018 "Общие положения по применению систем управления"',
];

const auditors = [
	"Голикова Татьяна Ивановна",
	"Романов Александр Викторович",
	"Кузнецова Мария Николаевна",
];

const generateCertificate = (): Certificate => ({
	number: `ROSСERT.RU.${getRandomInt(1000, 9999)}.${getRandomInt(
		1000000,
		9999999
	)}`,
	serial: `${getRandomInt(100000, 999999)}`,
	issueDate: "06 июля 2022 г",
	validUntil: "06 июля 2025 г",
	firstInspectionDate: "6 июля 2024 г",
	firstInspectionPassed: getRandomInt(0, 1) === 1,
	secondInspectionDate: "6 июля 2024 г",
	secondInspectionPassed: getRandomInt(0, 1) === 1,
	subject: subjects[getRandomInt(0, subjects.length - 1)],
	auditors: auditors[getRandomInt(0, auditors.length - 1)],
	pdfLink: "/path/to/certificate.pdf",
});

const organizations: Organization[] = Array.from({ length: 40 }, (_, index) => {
	const companyName = companyNames[getRandomInt(0, companyNames.length - 1)];
	return {
		id: (22680 + index).toString(),
		date: "12 Февраля 2023",
		name: companyName,
		fullName: `Общество с ограниченной ответственностью "${
			companyName.split("'")[1]
		}"`,
		shortName: companyName,
		inn: generateRandomInn(),
		ogrn: generateRandomOgrn(),
		status:
			index % 3 === 0
				? "Действителен"
				: index % 3 === 1
				? "Приостановлен"
				: "Отсутствует",
		legalAddress: "000000, г. Санкт-Петербург, ул. Пушкина, д.24, офис 206",
		activityAddress: "000000, г. Санкт-Петербург, ул. Пушкина, д.24, офис 206",
		director: `Директор (${directors[getRandomInt(0, directors.length - 1)]})`,
		certificate: generateCertificate(),
	};
});

export default organizations;
