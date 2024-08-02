import { FC, useEffect, useRef, useState } from "react";
import styles from "./Accordion.module.css";

interface AccordionProps {
	title: string;
	content: string;
	documentImages?: string[];
}

const Accordion: FC<AccordionProps> = ({ title, content, documentImages }) => {
	const [isOpen, setIsOpen] = useState(false);
	const contentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (contentRef.current) {
			contentRef.current.style.maxHeight = isOpen
				? `${contentRef.current.scrollHeight}px`
				: "0px";
			contentRef.current.style.padding = isOpen ? "10px" : "0 10px";
		}
	}, [isOpen]);

	const toggleAccordion = () => setIsOpen(!isOpen);

	return (
		<div className={styles.accordionItem}>
			<div className={styles.accordionTitleWrapper} onClick={toggleAccordion}>
				<div className={styles.accordionTitle}>
					<span className={styles.arrow}>{isOpen ? "▼" : "▶"}</span>
					<span>{title}</span>
				</div>
			</div>
			<div
				className={`${styles.accordionContent} ${isOpen ? styles.open : ""}`}
				ref={contentRef}
			>
				{isOpen && (
					<>
						<p>{content}</p>
						{documentImages && (
							<div className={styles.documents}>
								{documentImages.map((image, index) => (
									<div key={index}>
										<img src={image} alt="Document" />
									</div>
								))}
							</div>
						)}
					</>
				)}
			</div>
		</div>
	);
};

export default Accordion;
