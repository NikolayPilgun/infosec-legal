import React, { useState } from "react";
import Arrow from "../../assets/Registry/ARleft.svg";
import Registry1 from "../../assets/Registry/Registry1.svg";
import Registry2 from "../../assets/Registry/Registry2.svg";
import Registry3 from "../../assets/Registry/Registry3.svg";

import organizations from "../../data/organizations";
import styles from "./Registry.module.css";

interface Organization {
	id: string;
	date: string;
	name: string;
	inn: string;
	ogrn: string;
	status: "Действителен" | "Приостановлен" | "Отсутствует";
}

const statuses: { [key in Organization["status"]]: string } = {
	Действителен: Registry3,
	Приостановлен: Registry2,
	Отсутствует: Registry1,
};

const PAGE_SIZE = 4;
const TOTAL_RECORDS = organizations.length;
const TOTAL_PAGES = Math.ceil(TOTAL_RECORDS / PAGE_SIZE);

const filters = [
	{ id: "all", label: "Все записи", count: 34678 },
	{ id: "valid", label: "Действительные", count: 18600 },
	{ id: "excluded", label: "Исключенные", count: 9345 },
];

const Registry: React.FC = () => {
	const [activeFilter, setActiveFilter] = useState<string | null>("all");
	const [currentPage, setCurrentPage] = useState<number>(1);

	const handleFilterClick = (filter: string) => {
		setActiveFilter(filter);
	};

	const handlePrevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	const handleNextPage = () => {
		if (currentPage < TOTAL_PAGES) {
			setCurrentPage(currentPage + 1);
		}
	};

	const paginatedOrganizations = organizations.slice(
		(currentPage - 1) * PAGE_SIZE,
		currentPage * PAGE_SIZE
	);

	return (
		<div className={styles.registryContainer}>
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
				<div className={styles.registryFilter}>
					{filters.map((filter) => (
						<h4
							key={filter.id}
							className={activeFilter === filter.id ? styles.active : ""}
							onClick={() => handleFilterClick(filter.id)}
						>
							{filter.label} <span>{filter.count}</span>
						</h4>
					))}
				</div>
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
						{paginatedOrganizations.map((org) => (
							<tr key={org.id}>
								<td>{org.id}</td>
								<td>{org.date}</td>
								<td>{org.name}</td>
								<td>
									{org.inn} / {org.ogrn}
								</td>
								<td>
									<span className={styles.tableStatus}>
										<img src={statuses[org.status]} alt={org.status} />
										<span>{org.status}</span>
									</span>
								</td>
							</tr>
						))}
					</tbody>
				</table>
				<div className={styles.pagination}>
					<button className={styles.prevButton} onClick={handlePrevPage}>
						<img src={Arrow} alt="Назад" />
					</button>
					<span>
						{currentPage} из {TOTAL_PAGES} страниц
					</span>
					<button onClick={handleNextPage}>
						<img src={Arrow} alt="Вперед" />
					</button>
				</div>
			</section>
		</div>
	);
};

export default Registry;
