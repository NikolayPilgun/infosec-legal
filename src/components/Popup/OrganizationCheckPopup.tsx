import React, { useEffect } from "react";
import FocusLock from "react-focus-lock";
import styles from "./OrganizationCheckPopup.module.css";

interface OrganizationCheckPopupProps {
	isOpen: boolean;
	onClose: () => void;
}

const OrganizationCheckPopup: React.FC<OrganizationCheckPopupProps> = ({
	isOpen,
	onClose,
}) => {
	useEffect(() => {
		const mainElement = document.getElementsByTagName("main")[0];
		if (isOpen) {
			// Заблокировать прокрутку основного окна
			document.body.style.overflow = "hidden";
			if (mainElement) {
				mainElement.setAttribute("aria-hidden", "true");
			}
		} else {
			// Восстановить прокрутку основного окна
			document.body.style.overflow = "auto";
			if (mainElement) {
				mainElement.removeAttribute("aria-hidden");
			}
		}

		// Очистка при размонтировании компонента
		return () => {
			document.body.style.overflow = "auto";
			if (mainElement) {
				mainElement.removeAttribute("aria-hidden");
			}
		};
	}, [isOpen]);

	if (!isOpen) return null;

	return (
		<div className={styles.popupOverlay}>
			<FocusLock>
				<div className={styles.popupContent} aria-modal="true" role="dialog">
					<button
						className={styles.closeButton}
						onClick={onClose}
						aria-label="Close popup"
					>
						&times;
					</button>
					<h2>
						Бесплатная проверка организации на соответствие требованиям
						Федерального закона “О персональных данных” от 27.06.2006г.
					</h2>
					<div className={styles.steps}>
						<div>
							<img src="step1.png" alt="step1" />
							Заполните онлайн-форму - вам не нужно посещать офис
						</div>
						<div>
							<img src="step2.png" alt="step2" />
							Получите полное аудиторское заключение по вашей организации
						</div>
						<div>
							<img src="step3.png" alt="step3" />
							Узнайте какие меры необходимо принять
						</div>
					</div>
					<h3>Основные регистрационные данные</h3>
					<form>
						<div className={styles.formGroup}>
							<label>ИНН Организации</label>
							<input type="text" defaultValue="376 730 378" />
						</div>
						<div className={styles.formGroup}>
							<label>ОГРН/ОГРНИП Организации</label>
							<input
								type="text"
								defaultValue="376 730 378"
								className={styles.errorInput}
							/>
							<span className={styles.errorMessage}>
								Это поле заполнено неверно
							</span>
						</div>
						<div className={styles.formGroup}>
							<label>Краткое наименование организации</label>
							<input
								type="text"
								defaultValue="ООО 'Комитет информационной безопасности'"
							/>
						</div>
						<div className={styles.formGroup}>
							<label>Организационно-правовая форма</label>
							<input type="text" />
						</div>
						<button type="submit">Продолжить</button>
					</form>
					<p className={styles.info}>
						Данные синхронизированы по ИНН на 1.11.2023 из информационной
						системы Федеральной налоговой службы РФ
					</p>
				</div>
			</FocusLock>
		</div>
	);
};

export default OrganizationCheckPopup;
