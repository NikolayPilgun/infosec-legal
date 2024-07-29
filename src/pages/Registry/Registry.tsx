import React from "react";
import styles from "./Registry.module.css";

interface Organization {
	id: string;
	date: string;
	name: string;
	inn: string;
	ogrn: string;
	status: "Действителен" | "Приостановлен" | "Отсутствует";
}

const organizations: Organization[] = [
	{
		id: "22680",
		date: "12 Февраля 2023",
		name: "ООО 'РАЙТ ПЕРСЕПШН'",
		inn: "2632115070",
		ogrn: "90872632115070",
		status: "Действителен",
	},
	{
		id: "22681",
		date: "12 Февраля 2023",
		name: "ООО 'ЯНДЕКС.МЕДИАСЕРВИСЫ'",
		inn: "2632115070",
		ogrn: "90872632115070",
		status: "Приостановлен",
	},
	{
		id: "22682",
		date: "12 Февраля 2023",
		name: "ООО 'РАЙТ ПЕРСЕПШН'",
		inn: "2632115070",
		ogrn: "90872632115070",
		status: "Действителен",
	},
	{
		id: "22683",
		date: "12 Февраля 2023",
		name: "ООО 'ЯНДЕКС.МЕДИАСЕРВИСЫ'",
		inn: "2632115070",
		ogrn: "90872632115070",
		status: "Отсутствует",
	},
	// Добавьте остальные организации
];

const statuses: Record<Organization["status"], string> = {
	Действителен: "green",
	Приостановлен: "orange",
	Отсутствует: "red",
};

const Registry: React.FC = () => {
	return (
		<div className={styles.registryContainer}>
			<header className={styles.header}>
				<h1>Единый реестр организаций</h1>
				<p>Главная / Единый реестр</p>
			</header>

			<section className={styles.searchSection}>
				<h3>
					Вы можете проверить свою организацию на наличие и действительность
					сертификата
				</h3>
				<div className={styles.searchForm}>
					<input type="text" placeholder="Название или ИНН Организации" />
					<button>Найти</button>
				</div>
			</section>

			<section className={styles.registrySection}>
				<table className={styles.registryTable}>
					<thead>
						<tr>
							<th>№ Записи</th>
							<th>Дата регистрации</th>
							<th>Название организации</th>
							<th>ИНН / ОГРН</th>
							<th>Статус сертификата</th>
						</tr>
					</thead>
					<tbody>
						{organizations.map((org, index) => (
							<tr key={index}>
								<td>{org.id}</td>
								<td>{org.date}</td>
								<td>{org.name}</td>
								<td>
									{org.inn} / {org.ogrn}
								</td>
								<td>
									<span
										className={`${styles.status} ${
											styles[statuses[org.status]]
										}`}
									>
										{org.status}
									</span>
								</td>
							</tr>
						))}
					</tbody>
				</table>
				<div className={styles.pagination}>
					<button>Назад</button>
					<span>1 из 934 страниц</span>
					<button>Вперед</button>
				</div>
			</section>
		</div>
	);
};

export default Registry;
