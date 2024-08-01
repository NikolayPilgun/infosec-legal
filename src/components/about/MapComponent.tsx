import React, { useState } from "react";
import { Map, Placemark, YMaps } from "react-yandex-maps";
import styles from "./MapComponent.module.css";

interface City {
	name: string;
	count: number;
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

const MapComponent: React.FC = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedCity, setSelectedCity] = useState<City>(defaultCity);

	const handleSearch = () => {
		const foundCity = cities.find((city) =>
			city.name.toLowerCase().includes(searchTerm.toLowerCase())
		);
		if (foundCity) {
			setSelectedCity(foundCity);
		} else {
			alert(`Город "${searchTerm}" не найден в списке.`);
		}
	};

	const handleCitySelect = (city: City) => {
		setSelectedCity(city);
	};

	return (
		<div className={styles.container}>
			<div className={styles.sidebar}>
				<h2>Нам доверились 27 642 компании из 94 городов</h2>
				<div className={styles.searchContainer}>
					<input
						type="text"
						placeholder="Введите название города"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className={styles.searchInput}
					/>
					<button onClick={handleSearch} className={styles.searchButton}>
						Найти город
					</button>
				</div>
				<ul className={styles.cityList}>
					{cities.map((city) => (
						<li
							key={city.name}
							className={styles.cityItem}
							onClick={() => handleCitySelect(city)}
						>
							{city.name} <span className={styles.count}>({city.count})</span>
						</li>
					))}
				</ul>
			</div>
			<YMaps>
				<div className={styles.mapContainer}>
					<Map
						state={{
							center: selectedCity.coordinates,
							zoom: 10,
						}}
						style={{ width: "100%", height: "100%" }}
					>
						<Placemark
							geometry={selectedCity.coordinates}
							properties={{ balloonContent: selectedCity.name }}
							options={{ preset: "islands#icon", iconColor: "#0095b6" }}
						/>
					</Map>
				</div>
			</YMaps>
		</div>
	);
};

export default MapComponent;
