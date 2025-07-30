import type { FC } from 'react'
import clsx from 'clsx'
import { useWindowSize } from 'usehooks-ts'
import { motion } from 'framer-motion'

import { Container } from '../../../../../../components/Container/Container'

import HeartImg from '../../../../../../assets/common/icons/heart.svg'
import PizzaImg from '../../../../../../assets/common/icons/pizza.svg'
import PhoneImg from '../../../../../../assets/common/icons/phone.svg'

import styles from './FeaturesText.module.sass'

interface FeaturesTextProps {
	className?: string
}

export const FeaturesText: FC<FeaturesTextProps> = ({ className }) => {
	const { width } = useWindowSize()

	if (width > 815) return null

	return (
		<section className={clsx(styles.section, className)}>
			<Container>
				<h3 className={styles.content}>
					<div className={styles.text}>
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							whileInView={{
								opacity: 1,
								y: 0,
								transition: { delay: 0.1, duration: 0.3 },
							}}
							viewport={{ once: true, amount: 0.3 }}
						>
							Учись
							<img
								src={HeartImg}
								className={clsx(styles.icon, styles.heart)}
								alt=''
							/>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							whileInView={{
								opacity: 1,
								y: 0,
								transition: { delay: 0.1, duration: 0.3 },
							}}
							viewport={{ once: true, amount: 0.3 }}
						>
							в любимом
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							whileInView={{
								opacity: 1,
								y: 0,
								transition: { delay: 0.2, duration: 0.3 },
							}}
							viewport={{ once: true, amount: 0.3 }}
						>
							формате
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							whileInView={{
								opacity: 1,
								y: 0,
								transition: { delay: 0.3, duration: 0.3 },
							}}
							viewport={{ once: true, amount: 0.3 }}
						>
							<img
								src={PizzaImg}
								className={clsx(styles.icon, styles.pizza)}
								alt=''
							/>
							нужен
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							whileInView={{
								opacity: 1,
								y: 0,
								transition: { delay: 0.4, duration: 0.3 },
							}}
							viewport={{ once: true, amount: 0.3 }}
						>
							только
							<img
								src={PhoneImg}
								className={clsx(styles.icon, styles.phone)}
								alt=''
							/>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							whileInView={{
								opacity: 1,
								y: 0,
								transition: { delay: 0.5, duration: 0.3 },
							}}
							viewport={{ once: true, amount: 0.3 }}
						>
							смартфон
						</motion.div>
					</div>
				</h3>
			</Container>
		</section>
	)
}
