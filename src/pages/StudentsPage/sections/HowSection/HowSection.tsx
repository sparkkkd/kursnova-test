import type { FC } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import { HowCard } from './components/HowCard/HowCard'
import { Container } from '../../../../components/Container/Container'

import weHelp from '../../../../assets/students/how/we-help.png'

import { CARDS_CONTENT } from './constants'

import styles from './HowSection.module.sass'
import { useWindowSize } from 'usehooks-ts'

interface HowSectionsProps {
	className?: string
}

export const HowSection: FC<HowSectionsProps> = ({ className }) => {
	const { width } = useWindowSize()

	return (
		<section className={clsx(className, styles.how)} id='how'>
			<Container>
				<div className={styles.wrapper}>
					<motion.h3
						className={styles.title}
						initial={{ opacity: 0, x: -100 }}
						whileInView={{ opacity: 1, x: 0, transition: { duration: 0.3 } }}
						viewport={{ once: true, amount: 0.3 }}
					>
						Как все устроено
					</motion.h3>
					<div className={styles.cards}>
						{CARDS_CONTENT.map((card, index) => {
							const baseDelay = 0.1

							return (
								<HowCard
									key={index}
									className={styles.card}
									img={card.img}
									text={card.text}
									soon={card.soon}
									delayCard={baseDelay + index * 0.1}
									delayImg={baseDelay + index * 0.1}
									delayText={baseDelay + index * 0.1}
								/>
							)
						})}
						<motion.img
							className={styles.img}
							src={weHelp}
							alt='Мы поможем!'
							initial={{ opacity: 0, x: -100 }}
							whileInView={{
								opacity: 1,
								x: width <= 560 ? '-50%' : 0,
								transition: {
									duration: 0.4,
									delay: 0.5,
								},
							}}
							viewport={{ once: true, amount: 0.3 }}
						/>
					</div>
				</div>
			</Container>
		</section>
	)
}
