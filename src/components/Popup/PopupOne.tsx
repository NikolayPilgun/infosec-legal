import React from "react";
import Popup1 from "../../assets/Popup/popup1.svg";
import Popup2 from "../../assets/Popup/popup2.svg";
import Popup3 from "../../assets/Popup/popup3.svg";
import PopupG from "../../assets/Popup/popupG.svg";
import popupStatus from "../../assets/Popup/popupStatus.svg";
import popupYes from "../../assets/Popup/popupYes.svg";
import { Organization } from "../../data/organizations";
import styles from "./PopupOne.module.css";

interface PopupOneProps {
	organization: Organization;
}

const PopupOne: React.FC<PopupOneProps> = ({ organization }) => {
	return (
		<>
			<section className={styles.headerSection}>
				<div className={styles.diamond}></div>
				<h2>
					Бесплатная проверка организации на соответствие требованиям
					Федерального закона “О персональных данных” от 27.06.2006г.
				</h2>
				<div className={styles.steps}>
					<div className={styles.stepItem}>
						<span>
							<img src={PopupG} alt="PopupG" />
							<img src={Popup1} alt="Popup1" />
						</span>
						<span>Заполните онлайн-форму - вам не нужно посещать офис</span>
					</div>
					<div className={styles.stepItem}>
						<span>
							<img src={PopupG} alt="PopupG" />
							<img src={Popup2} alt="Popup2" />
						</span>
						<span>
							Получите полное аудиторское заключение по вашей организации
						</span>
					</div>
					<div className={styles.stepItem}>
						<span>
							<img src={PopupG} alt="PopupG" />
							<img src={Popup3} alt="Popup3" />
						</span>
						<span>
							Узнайте какие меры необходимо принять для соответствия ФЗ-152
						</span>
					</div>
				</div>
			</section>
			<section className={styles.bodySection}>
				<h3>Основные регистрационные данные</h3>
				<form>
					<div className={styles.formGroup}>
						<img src={popupYes} alt="popupYes" />
						<label>ИНН Организации</label>
						<input type="text" value={organization.inn} readOnly />
					</div>
					<div className={styles.formGroup}>
						<img src={popupYes} alt="popupYes" />
						<label>ОГРН/ОГРНИП Организации</label>
						<input type="text" value={organization.ogrn} readOnly />
					</div>
					<div className={styles.formGroup}>
						<img src={popupYes} alt="popupYes" />
						<label>Краткое наименование организации</label>
						<input type="text" value={organization.shortName} readOnly />
					</div>
					<div className={styles.formGroup}>
						<label>Организационно-правовая форма</label>
						<input type="text" value={organization.fullName} readOnly />
					</div>
					<div className={styles.formButton}>
						<p className={styles.info}>
							<img src={popupStatus} alt="popupStatus" />
							<span>
								Данные синхронизированы по ИНН на 1.11.2023 из
								<br />
								информационной системы Федеральной налоговой службы РФ
							</span>
						</p>
						<button type="submit">Продолжить</button>
					</div>
				</form>
			</section>
		</>
	);
};

export default PopupOne;
