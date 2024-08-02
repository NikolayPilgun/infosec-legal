import classNames from "classnames";
import React from "react";
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
	return (
		<div className={classNames(styles.inputBlock, containerClassName)}>
			<h3 className={classNames(styles.heading, headingClassName)}>
				Проверьте свою организацию онлайн{" "}
				<span className={classNames(spanClassName)}>за 1 минуту</span> и
				получите заключение эксперта по защите персональных данных -
				<span className={classNames(spanClassName)}> бесплатно</span>
			</h3>
			<div className={classNames(styles.checkForm, formClassName)}>
				<input
					type="text"
					placeholder="ИНН Организации"
					className={classNames(styles.input, inputClassName)}
				/>
				<button className={classNames(styles.button, buttonClassName)}>
					Проверить
				</button>
			</div>
		</div>
	);
};

export default CheckFormBlock;
