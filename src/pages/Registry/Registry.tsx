import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
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

const getFilteredOrganizationsCount = (
	organizations: Organization[],
	searchQuery: string
): Record<string, number> => {
	const filteredOrgs = organizations.filter(
		(org) =>
			org.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
			org.inn.includes(searchQuery)
	);
	const all = filteredOrgs.length;
	const valid = filteredOrgs.filter(
		(org) => org.status === "Действителен"
	).length;
	const excluded = filteredOrgs.filter(
		(org) => org.status === "Отсутствует"
	).length;
	const suspended = filteredOrgs.filter(
		(org) => org.status === "Приостановлен"
	).length;
	return { all, valid, excluded, suspended };
};

const Registry: React.FC = () => {
	const [activeFilter, setActiveFilter] = useState<string>("all");
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [inputPage, setInputPage] = useState<number | string>(1);
	const [searchQuery, setSearchQuery] = useState<string>("");

	const counts = useMemo(
		() => getFilteredOrganizationsCount(organizations, searchQuery),
		[searchQuery]
	);

	const filters = [
		{ id: "all", label: "Все записи", count: counts.all },
		{ id: "valid", label: "Действительные", count: counts.valid },
		{ id: "excluded", label: "Исключенные", count: counts.excluded },
		{ id: "suspended", label: "Приостановлен", count: counts.suspended },
	];

	const TOTAL_RECORDS = counts[activeFilter] || 0;
	const TOTAL_PAGES = Math.ceil(TOTAL_RECORDS / PAGE_SIZE);

	const handleFilterClick = (filter: string) => {
		setActiveFilter(filter);
		setCurrentPage(1);
		setInputPage(1);
	};

	const handlePrevPage = () => {
		if (currentPage > 1) {
			const newPage = currentPage - 1;
			setCurrentPage(newPage);
			setInputPage(newPage);
		}
	};

	const handleNextPage = () => {
		if (currentPage < TOTAL_PAGES) {
			const newPage = currentPage + 1;
			setCurrentPage(newPage);
			setInputPage(newPage);
		}
	};

	const handlePageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		if (/^\d*$/.test(value)) {
			setInputPage(value === "" ? "" : Number(value));
		}
	};

	const handlePageSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		let page = Number(inputPage);
		page = isNaN(page) ? 1 : Math.max(1, Math.min(page, TOTAL_PAGES));
		setCurrentPage(page);
		setInputPage(page);
	};

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(e.target.value);
		setCurrentPage(1);
		setInputPage(1);
	};

	const handleSearchSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setCurrentPage(1);
		setInputPage(1);
	};

	const filteredOrganizations = organizations.filter((org) => {
		const matchesSearchQuery =
			org.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
			org.inn.includes(searchQuery);
		if (!matchesSearchQuery) return false;
		if (activeFilter === "all") return true;
		if (activeFilter === "valid") return org.status === "Действителен";
		if (activeFilter === "excluded") return org.status === "Отсутствует";
		if (activeFilter === "suspended") return org.status === "Приостановлен";
		return false;
	});

	const paginatedOrganizations = filteredOrganizations.slice(
		(currentPage - 1) * PAGE_SIZE,
		currentPage * PAGE_SIZE
	);

	const navigate = useNavigate();

	const handleRowClick = (id: string) => {
		navigate(`/registry/${id}`);
	};

	return (
		<div className={styles.registryContainer}>
			<section className={styles.searchSection}>
				<h3>
					Вы можете проверить свою организацию на наличие и действительность
					сертификата
				</h3>
				<form className={styles.searchForm} onSubmit={handleSearchSubmit}>
					<input
						type="text"
						value={searchQuery}
						onChange={handleSearchChange}
						placeholder="Название или ИНН Организации"
					/>
					<button type="submit">Найти</button>
				</form>
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
							<tr key={org.id} onClick={() => handleRowClick(org.id)}>
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
				{TOTAL_RECORDS > 0 && (
					<div className={styles.pagination}>
						<button
							className={styles.prevButton}
							onClick={handlePrevPage}
							disabled={currentPage === 1}
						>
							<img src={Arrow} alt="Назад" />
						</button>
						<form onSubmit={handlePageSubmit}>
							<input
								type="text"
								value={inputPage}
								onChange={handlePageInput}
								className={styles.pageInput}
							/>{" "}
							из {TOTAL_PAGES} страниц
						</form>
						<button
							onClick={handleNextPage}
							disabled={currentPage === TOTAL_PAGES}
						>
							<img src={Arrow} alt="Вперед" />
						</button>
					</div>
				)}
			</section>
		</div>
	);
};

export default Registry;
