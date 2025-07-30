import { useState, type FC } from 'react'
import clsx from 'clsx'

import { Container } from '../../../../components/Container/Container'
import { FaqItem } from './components/FaqItem/FaqItem'

import { FAQ_DATA } from './constants'

import styles from './FaqSection.module.sass'
interface FaqSectionProps {
	className?: string
}

export const FaqSection: FC<FaqSectionProps> = ({ className }) => {
	const [openIndex, setOpenIndex] = useState<number | null>(null)

	return (
		<section className={clsx(styles.section, className)} id='faq'>
			<Container>
				<div className={styles.wrapper}>
					<h3 className={styles.title}>Частые вопросы</h3>

					<ul className={styles.list}>
						{FAQ_DATA.map((item, index) => (
							<FaqItem
								key={index}
								{...item}
								isOpen={openIndex === index}
								onToggle={() =>
									setOpenIndex(openIndex === index ? null : index)
								}
							/>
						))}
					</ul>
				</div>
			</Container>
		</section>
	)
}
