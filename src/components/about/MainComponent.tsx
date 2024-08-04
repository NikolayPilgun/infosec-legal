import React, { useEffect, useState } from "react";
import iconSearch from "../../assets/map/icon.svg";
import MapComponent from "../Map/MapComponent";
import styles from "./MainComponent.module.css";

interface City {
	name: string;
	count?: number;
	coordinates: [number, number];
}

const cities: City[] = [
	{
		name: "Санкт-Петербург",
		count: 186,
		coordinates: [59.9342802, 30.3350986],
	},
	{ name: "Москва", count: 344, coordinates: [55.755814, 37.617673] },
	{ name: "Екатеринбург", count: 344, coordinates: [56.838011, 60.597465] },
	{ name: "Ростов на Дону", count: 72, coordinates: [47.2225, 39.7182] },
	{ name: "Ханты-Мансийск", count: 117, coordinates: [61.0026, 69.0285] },
	{ name: "Тюмень", count: 155, coordinates: [57.1522, 65.5272] },
	{ name: "Нижний Новгород", count: 65, coordinates: [56.2965, 43.9361] },
];

const defaultCity: City = cities[1];
const defaultZoom = 12;

const MainComponent: React.FC = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedCity, setSelectedCity] = useState<City>(defaultCity);
	const [zoom, setZoom] = useState<number>(defaultZoom);

	useEffect(() => {
		if (!searchTerm) setSelectedCity(defaultCity);
	}, [searchTerm]);

	const fetchCoordinates = async () => {
		if (!searchTerm) return;

		try {
			const response = await fetch(
				`https://nominatim.openstreetmap.org/search?city=${searchTerm}&format=json&limit=1`
			);
			const data = await response.json();
			if (data.length > 0) {
				const { lat, lon, display_name } = data[0];
				const latitude = parseFloat(lat);
				const longitude = parseFloat(lon);

				if (!isNaN(latitude) && !isNaN(longitude)) {
					setSelectedCity({
						name: display_name,
						coordinates: [latitude, longitude],
					});
					setZoom(defaultZoom); // сбросить уровень масштабирования при поиске
				} else {
					alert(`Некорректные координаты для города "${searchTerm}".`);
				}
			} else {
				alert(`Город "${searchTerm}" не найден в базе данных OpenStreetMap.`);
			}
		} catch (error) {
			console.error("Ошибка при поиске города:", error);
		}
	};

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
		setSearchTerm(e.target.value);

	const handleCitySelect = (city: City) => {
		setSelectedCity(city);
		setZoom(defaultZoom);
	};

	return (
		<div className={styles.container}>
			<div className={styles.sidebar}>
				<h2>Нам доверились 27 642 компании из 94 городов</h2>
				<div className={styles.searchContainer}>
					<input
						type="text"
						placeholder="Найти город"
						value={searchTerm}
						onChange={handleSearch}
						className={styles.searchInput}
					/>
					<button onClick={fetchCoordinates} className={styles.searchButton}>
						<img src={iconSearch} alt="iconSearch" />
					</button>
				</div>
				<ul className={styles.cityList}>
					{cities.map((city) => (
						<li
							key={city.name}
							className={`${styles.cityItem} ${
								selectedCity.name === city.name ? styles.selectedCity : ""
							}`}
							onClick={() => handleCitySelect(city)}
						>
							<span className={styles.cityName}>{city.name}</span>
							<span className={styles.count}>{city.count}</span>
						</li>
					))}
				</ul>
			</div>
			<MapComponent selectedCity={selectedCity} zoom={zoom} />
		</div>
	);
};

export default MainComponent;
