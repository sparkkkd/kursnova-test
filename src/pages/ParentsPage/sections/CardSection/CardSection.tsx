import type { FC } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useWindowSize } from 'usehooks-ts'

import { Container } from '../../../../components/Container/Container'
import { DesktopCards } from './components/DesktopCards/DesktopCards'
import { SwipeCardStacks } from './components/SwipeCardStacks/SwipeCardStacks'

import styles from './CardSection.module.sass'

interface CardSectionProps {
	className?: string
}

export const CardSection: FC<CardSectionProps> = ({ className }) => {
	const { width } = useWindowSize()

	return (
		<section className={clsx(styles.section, className)} id='bingo'>
			<Container>
				<div className={styles.wrapper}>
					<motion.div
						initial={{ opacity: 0, y: 100 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true, amount: 0.3 }}
						className={styles.title}
					>
						{width > 650 && <h3>Для начала — знакомо ли вам что-нибудь?</h3>}
						{width <= 650 && (
							<h3>
								Для начала —
								<br />
								знакомо ли вам
								<br />
								что-нибудь?
							</h3>
						)}

						{width > 650 && (
							<div>
								Кликайте на карточку, если было — уверены, вы точно не одиноки
								в своих проблемах
							</div>
						)}
						{width <= 650 && (
							<div>
								Свайпайте карточки, и если увидите знакомую ситуацию —
								нажимайте. Уверены, вы не одиноки
							</div>
						)}
					</motion.div>

					<div className={styles.desktop}>
						<DesktopCards />
					</div>
				</div>
			</Container>

			<div className={styles.stack}>
				<SwipeCardStacks />
			</div>
		</section>
	)
}
