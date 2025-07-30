import { useRef, type FC } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import styles from './DesktopTeachers.module.sass'

import { TeachersSlider } from '../TeachersSlider/TeachersSlider'
import { Container } from '../../../../../../components/Container/Container'
import clsx from 'clsx'

interface DesktopTeachersProps {
	className?: string
}

export const DesktopTeachers: FC<DesktopTeachersProps> = ({ className }) => {
	const targetRef = useRef<HTMLDivElement>(null)
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ['start 10%', 'end start'],
	})

	const sliderY = useTransform(scrollYProgress, [0, 1], ['50%', '-100%'])
	const textY = useTransform(scrollYProgress, [0, 1], [100, -100])
	const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
	const textScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.98])

	return (
		<div className={clsx(styles.stickyWrapper, className)} ref={targetRef}>
			<div className={styles.sticky}>
				<Container>
					<motion.div
						className={styles.titleWrapper}
						style={{ y: textY, opacity: textOpacity, scale: textScale }}
					>
						<motion.h3
							className={styles.title}
							initial={{
								opacity: 0,
								y: 100,
							}}
							whileInView={{
								opacity: 1,
								y: 0,
								transition: {
									duration: 0.3,
								},
							}}
							viewport={{ once: true, amount: 0.3 }}
						>
							«Вот бы так в школе объясняли...»
						</motion.h3>
						<motion.span
							className={styles.subtitle}
							initial={{
								opacity: 0,
								y: 100,
							}}
							whileInView={{
								opacity: 1,
								y: 0,
								transition: {
									duration: 0.3,
									delay: 0.2,
								},
							}}
							viewport={{ once: true, amount: 0.3 }}
						>
							Наши учителя так сильно любят свои предметы, что заражают этим
							учеников
						</motion.span>
					</motion.div>
				</Container>
				<TeachersSlider y={sliderY} />
			</div>
		</div>
	)
}
