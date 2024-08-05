import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import ArrowLeft from "../../assets/OrganizationDetail/ArrowLeft.svg";
import certificate from "../../assets/OrganizationDetail/certificate.svg";
import certificateDownload from "../../assets/OrganizationDetail/certificateDownload.svg";
import NoOD from "../../assets/OrganizationDetail/NoOD.svg";
import YesOD from "../../assets/OrganizationDetail/YesOD.svg";
import organizations from "../../data/organizations";
import styles from "./OrganizationDetail.module.css";

const OrganizationDetail: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const navigate = useNavigate();
	const organization = organizations.find((org) => org.id === id);

	if (!organization) {
		return <div>Организация не найдена</div>;
	}

	return (
		<div className={styles.container}>
			<nav className={styles.backLink}>
				<img src={ArrowLeft} alt="ArrowLeft" />
				<button onClick={() => navigate(-1)}>Назад к результатам поиска</button>
			</nav>

			<div className={styles.containerInfo}>
				<div className={styles.organizationInfo}>
					<div className={styles.organName}>
						<p>
							Полное наименование (коммерческая организация без преобладающего
							иностранного участия)
						</p>
						<h3>{organization.fullName}</h3>
					</div>

					<p className={styles.containsRegistry}>
						{organization.certificate.secondInspectionPassed ? (
							<span>
								<img src={YesOD} alt="YesOD" />
								<span>Содержится в реестре операторов РКН</span>
							</span>
						) : (
							<span>
								<img src={NoOD} alt="NoOD" />
								<span>Не содержится в реестре операторов РКН</span>
							</span>
						)}
					</p>

					<div className={styles.organName}>
						<p>Сокращенное наименование</p>
						<h3>{organization.shortName}</h3>
					</div>

					<div className={styles.organNumber}>
						<div className={styles.organName}>
							<p>Идентификационный номер (ИНН)</p>
							<h3>{organization.inn}</h3>
						</div>
						<div className={styles.organName}>
							<p>ОГРН</p>
							<h3>{organization.ogrn}</h3>
						</div>
					</div>

					<div className={styles.organName}>
						<p>Юридический адрес</p>
						<h4>{organization.legalAddress}</h4>
					</div>

					<div className={styles.organName}>
						<p>
							Адрес осуществления деятельности в соответствии с областью
							сертификации
						</p>
						<h4>{organization.activityAddress}</h4>
					</div>

					<div className={styles.organName}>
						<p>Руководитель</p>
						<h4>{organization.director}</h4>
					</div>
				</div>
				<div className={styles.certificate}>
					<div className={styles.certificateTitle}>
						<img src={certificate} alt="certificate" />
						<p>
							<span>Сертификат № </span>
							<span>{organization.certificate.number}</span>
							<a
								href={organization.certificate.pdfLink}
								className={styles.pdfLink}
								download
							>
								<img src={certificateDownload} alt="certificateDownload" />
								Скачать сертификат PDF
							</a>
						</p>
					</div>

					<div className={styles.gridContainer}>
						<div className={`${styles.gridItem} ${styles.rightBorder}`}>
							<p>Порядковый номер</p>
							<h5>{organization.certificate.serial}</h5>
						</div>
						<div className={styles.gridItem}>
							<p>Статус</p>
							<h5>Действителен</h5>
						</div>
						<div className={`${styles.gridItem} ${styles.rightBorder}`}>
							<p>Дата выдачи</p>
							<h5>{organization.certificate.issueDate}</h5>
						</div>
						<div className={styles.gridItem}>
							<p>Действителен до</p>
							<h5>{organization.certificate.validUntil}</h5>
						</div>
						<div className={`${styles.gridItem} ${styles.rightBorder}`}>
							<p>1й - Инспекционный контроль</p>
							<h5>{organization.certificate.firstInspectionDate}</h5>
							<h5>
								{organization.certificate.firstInspectionPassed ? (
									<span>
										<img src={YesOD} alt="YesOD" />
										<span>Пройден</span>
									</span>
								) : (
									<span>
										<img src={NoOD} alt="NoOD" />
										<span>Не пройден</span>
									</span>
								)}
							</h5>
						</div>
						<div className={styles.gridItem}>
							<p>2й - Инспекционный контроль</p>
							<h5>{organization.certificate.secondInspectionDate}</h5>
							<h5>
								{organization.certificate.secondInspectionPassed ? (
									<span>
										<img src={YesOD} alt="YesOD" />
										<span>Пройден</span>
									</span>
								) : (
									<span>
										<img src={NoOD} alt="NoOD" />
										<span>Не пройден</span>
									</span>
								)}
							</h5>
						</div>
					</div>

					<div>
						<div className={styles.infoItem}>
							<p>Предмет сертификации</p>
							<h5>{organization.certificate.subject}</h5>
						</div>
						<div className={styles.infoItem}>
							<p>Область сертификации</p>
							<h5>Перечисление (пример в одну строку)</h5>
						</div>
						<div className={styles.infoItem}>
							<p>Внутренние аудиторы</p>
							<h5>{organization.certificate.auditors}</h5>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OrganizationDetail;
