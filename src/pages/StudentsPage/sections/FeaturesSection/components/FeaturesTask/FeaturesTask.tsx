import { type FC } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import { Container } from '../../../../../../components/Container/Container'
import { FeaturesDescription } from '../FeaturesDescription/FeaturesDescription'

import TaskTag from '../../../../../../assets/students/features/task-tag.svg'

import Star from '../../../../../../assets/common/icons/star.svg?react'
import BackPackIcon from '../../../../../../assets/common/icons/backpack.svg?react'
import DumbbelIcon from '../../../../../../assets/common/icons/dumbbel.svg?react'

import Poster from '../../../../../../assets/parents/education/poster-3.png'

import styles from './FeaturesTask.module.sass'

interface FeaturesTaskProps {
	className?: string
}

export const FeaturesTask: FC<FeaturesTaskProps> = ({ className }) => {
	return (
		<Container className={styles.container}>
			<div className={clsx(styles.wrapper, className)}>
				<div className={styles.left}>
					<div className={styles.textWrapper}>
						<motion.div
							className={styles.title}
							initial={{ opacity: 0, y: -100 }}
							whileInView={{
								opacity: 1,
								y: 0,
								transition: {
									duration: 0.3,
								},
							}}
							viewport={{ once: true, amount: 0.3 }}
						>
							Решай
						</motion.div>
						<motion.div className={styles.text}>
							<motion.div
								initial={{ opacity: 0, x: -100 }}
								whileInView={{
									opacity: 1,
									x: 0,
									transition: {
										duration: 0.3,
										delay: 0.2,
									},
								}}
								viewport={{ once: true, amount: 0.3 }}
							>
								зада
							</motion.div>
							<motion.div
								initial={{ opacity: 0, y: 100 }}
								whileInView={{
									opacity: 1,
									y: 0,
									transition: {
										duration: 0.3,
										delay: 0,
									},
								}}
								viewport={{ once: true, amount: 0.1 }}
							>
								ния
								<Star className={styles.star} />
							</motion.div>
							<motion.img
								className={styles.taskTag}
								src={TaskTag}
								alt=''
								initial={{ opacity: 0, scale: 0, rotateZ: -8 }}
								whileInView={{
									opacity: 1,
									scale: 1,
									transition: { duration: 0.3, delay: 0.4 },
								}}
								viewport={{ once: true, amount: 0.3 }}
							/>
						</motion.div>
					</div>
				</div>
				<motion.div
					className={styles.center}
					initial={{ opacity: 0, scale: 0 }}
					whileInView={{
						opacity: 1,
						scale: 1,
						transition: {
							duration: 0.5,
							delay: 0.4,
							type: 'spring',
						},
					}}
					viewport={{ once: true, amount: 0.3 }}
				>
					<video
						src='https://storage.yandexcloud.net/test-backet-kursnova/features-task-1.mp4'
						className={styles.video}
						autoPlay
						muted
						playsInline
						preload='auto'
						poster={Poster}
					></video>
				</motion.div>
				<div className={styles.right}>
					{TASK_DESCRIPTIONS.map((props, index) => {
						const baseDelay = 0.1
						return (
							<FeaturesDescription
								key={index}
								{...props}
								delayIcon={baseDelay + index * 0.1}
								delayTitle={baseDelay + index * 0.2}
								delayText={baseDelay + index * 0.3}
							/>
						)
					})}
				</div>
			</div>
		</Container>
	)
}

const TASK_DESCRIPTIONS = [
	{
		icon: <DumbbelIcon />,
		title: '6 000+ заданий',
		description: (
			<>
				уже есть на платформе. <br /> Регулярно пополняем базу
			</>
		),
	},
	{
		icon: <BackPackIcon />,
		title: '5 предметов',
		description: (
			<>
				уже в доступе математика, алгебра, геометрия, вероятность и статистика,
				биология. Вся школьная программа будет в сентябре
			</>
		),
	},
]
