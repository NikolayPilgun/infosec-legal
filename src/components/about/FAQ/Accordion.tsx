import React, { useEffect, useRef, useState } from "react";
import styles from "./Accordion.module.css";

interface AccordionProps {
	title: string;
	content: string;
	documentImages?: string[];
}

const Accordion: React.FC<AccordionProps> = ({
	title,
	content,
	documentImages,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const contentRef = useRef<HTMLDivElement>(null);
	const [maxHeight, setMaxHeight] = useState<string>("0px");

	const toggleAccordion = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		if (contentRef.current) {
			setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
		}
	}, [isOpen]);

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
				style={{ maxHeight }}
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
