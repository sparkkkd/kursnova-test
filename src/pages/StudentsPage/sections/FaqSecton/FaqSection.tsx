import { useState, type FC } from 'react'
import clsx from 'clsx'
import { useAppSelector } from '../../../../store/hooks'

import { Container } from '../../../../components/Container/Container'
import { FaqItem } from './components/FaqItem/FaqItem'

import { FAQ_DATA_STUDENTS, FAQ_DATA_PARENTS } from './constants'

import styles from './FaqSection.module.sass'
interface FaqSectionProps {
	className?: string
}

export const FaqSection: FC<FaqSectionProps> = ({ className }) => {
	const [openIndex, setOpenIndex] = useState<number | null>(null)
	const { mode } = useAppSelector((state) => state.uiReducer)

	return (
		<section className={clsx(styles.section, className)} id='faq'>
			<Container>
				<div className={styles.wrapper}>
					<h3 className={styles.title}>Частые вопросы</h3>

					<ul className={styles.list}>
						{mode === 'students' &&
							FAQ_DATA_STUDENTS.map((item, index) => (
								<FaqItem
									key={index}
									{...item}
									isOpen={openIndex === index}
									onToggle={() =>
										setOpenIndex(openIndex === index ? null : index)
									}
								/>
							))}
						{mode === 'parents' &&
							FAQ_DATA_PARENTS.map((item, index) => (
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
