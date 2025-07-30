import type { FC } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import { Container } from '../../../components/Container/Container'
import { FooterCard } from '../FooterCard/FooterCard'
import { FooterContacts } from '../FooterContacts/FooterContacts'
import { FooterLicense } from '../FooterLicense/FooterLicense'

import Bot from '../../../assets/common/footer/bot.png'
import GreenBall from '../../../assets/common/footer/green-ball.png'
import Eurica from '../../../assets/common/footer/eurica.png'
import Horse from '../../../assets/common/footer/horse.png'
import CardBackground from '../../../assets/common/footer/card-bg-mobile.png'

import styles from './MobileFooter.module.sass'

interface MobileFooterProps {
	className?: string
}

export const MobileFooter: FC<MobileFooterProps> = ({ className }) => {
	return (
		<div className={clsx(styles.footer, className)}>
			<Container>
				<div className={styles.wrapper}>
					<h3 className={styles.title}>
						<motion.div
							initial={{ opacity: 0, y: 100 }}
							whileInView={{
								opacity: 1,
								y: 0,
								transition: { duration: 0.3, delay: 0.1 },
							}}
							viewport={{ once: true, amount: 0.1 }}
						>
							Учиться
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 100 }}
							whileInView={{
								opacity: 1,
								y: 0,
								transition: { duration: 0.3, delay: 0.2 },
							}}
							viewport={{ once: true, amount: 0.1 }}
						>
							по-новому
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 100 }}
							whileInView={{
								opacity: 1,
								y: 0,
								transition: { duration: 0.3, delay: 0.3 },
							}}
							viewport={{ once: true, amount: 0.1 }}
						>
							с kursnova
						</motion.div>
						<motion.img
							initial={{ opacity: 0, y: 100 }}
							whileInView={{
								opacity: 1,
								y: 0,
								transition: { duration: 0.3, delay: 0.4 },
							}}
							viewport={{ once: true, amount: 0.1 }}
							className={styles.bot}
							src={Bot}
							alt='Bot'
						/>
						<motion.img
							initial={{ opacity: 0, y: 100 }}
							whileInView={{
								opacity: 1,
								y: 0,
								transition: { duration: 0.3, delay: 0.5 },
							}}
							viewport={{ once: true, amount: 0.1 }}
							className={styles.greenBall}
							src={GreenBall}
							alt='GreenBall'
						/>
						<motion.img
							initial={{ opacity: 0, y: 100 }}
							whileInView={{
								opacity: 1,
								y: 0,
								rotateZ: -30,
								transition: { duration: 0.3, delay: 0.6 },
							}}
							viewport={{ once: true, amount: 0.1 }}
							className={styles.eurica}
							src={Eurica}
							alt='Eurica'
						/>
						<motion.img
							initial={{ opacity: 0, y: 100 }}
							whileInView={{
								opacity: 1,
								y: 0,
								transition: { duration: 0.3, delay: 0.7 },
							}}
							viewport={{ once: true, amount: 0.1 }}
							className={styles.horse}
							src={Horse}
							alt='Horse'
						/>
					</h3>
					<motion.div
						initial={{ opacity: 0, y: 100 }}
						whileInView={{ opacity: 1, y: 0 }}
					>
						<FooterCard
							backgroundImage={CardBackground}
							className={styles.card}
						/>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 100 }}
						whileInView={{ opacity: 1, y: 0 }}
					>
						<FooterContacts className={styles.contacts} />
					</motion.div>

					<FooterLicense isMobile className={styles.license} />
				</div>
			</Container>
		</div>
	)
}
