import classNames from "classnames";
import React, { useState } from "react";
import organizations, { Organization } from "../../data/organizations";
import OrganizationCheckPopup from "../Popup/OrganizationCheckPopup";
import styles from "./CheckFormBlock.module.css";

interface CheckFormBlockProps {
	containerClassName?: string;
	headingClassName?: string;
	spanClassName?: string;
	formClassName?: string;
	inputClassName?: string;
	buttonClassName?: string;
}

const CheckFormBlock: React.FC<CheckFormBlockProps> = ({
	containerClassName,
	headingClassName,
	spanClassName,
	formClassName,
	inputClassName,
	buttonClassName,
}) => {
	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const [inn, setInn] = useState("");
	const [error, setError] = useState("");
	const [organization, setOrganization] = useState<Organization | null>(null);
	const [formData, setFormData] = useState({});

	const validateInn = (value: string) => /^\d{10,12}$/.test(value);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setInn(value);
		setError(
			validateInn(value) || value === ""
				? ""
				: "ИНН должен содержать от 10 до 12 цифр."
		);
	};

	const handleButtonClick = () => {
		if (!validateInn(inn)) {
			setError("ИНН должен содержать от 10 до 12 цифр.");
			return;
		}
		const foundOrganization = organizations.find((org) => org.inn === inn);
		if (foundOrganization) {
			setOrganization(foundOrganization);
			setFormData({
				inn: foundOrganization.inn,
				ogrn: foundOrganization.ogrn,
				shortName: foundOrganization.shortName,
				fullName: foundOrganization.fullName,
				employeesCount: "",
				email: "",
				phone: "",
				storageTypes: {
					paper: false,
					electronic: false,
				},
				digitalSignatureUses: {
					tenders: false,
					documents: false,
					reporting: false,
					notUsed: false,
				},
				securityAssessment: {
					yes: false,
					no: false,
					unknownOption: false,
				},
			});
			setError("");
			setIsPopupOpen(true);
		} else {
			setFormData({});
			setOrganization(null);
			setError("Организация не найдена.");
		}
	};

	const handleClosePopup = () => {
		setIsPopupOpen(false);
		setError(""); // Clear error when closing popup
	};

	return (
		<div className={classNames(styles.inputBlock, containerClassName)}>
			<h3 className={classNames(styles.heading, headingClassName)}>
				Проверьте свою организацию онлайн{" "}
				<span className={classNames(spanClassName)}>за 1 минуту</span> и
				получите заключение эксперта по защите персональных данных -
				<span className={classNames(spanClassName)}>бесплатно</span>
			</h3>
			<div className={classNames(styles.checkForm, formClassName)}>
				<input
					type="text"
					placeholder="ИНН Организации"
					value={inn}
					onChange={handleInputChange}
					className={classNames(styles.input, inputClassName)}
				/>
				{error && <span className={styles.error}>{error}</span>}
				<button
					className={classNames(styles.button, buttonClassName)}
					onClick={handleButtonClick}
					disabled={!validateInn(inn)}
				>
					Проверить
				</button>
			</div>
			{isPopupOpen && (
				<OrganizationCheckPopup
					isOpen={isPopupOpen}
					onClose={handleClosePopup}
					organization={organization}
					initialFormData={formData}
				/>
			)}
		</div>
	);
};

export default CheckFormBlock;
