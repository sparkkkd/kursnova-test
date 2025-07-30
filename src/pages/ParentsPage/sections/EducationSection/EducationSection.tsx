import { useEffect, useRef, useState, type FC } from 'react'
import clsx from 'clsx'
import { useScroll, useMotionValueEvent, motion } from 'framer-motion'

import { Container } from '../../../../components/Container/Container'
import { DesktopScrollEducation } from './components/DesktopScrollEducation/DesktopScrollEducation'
import { MobileScrollEducation } from './components/MobileScrollEducation/MobileScrollEducation'

import styles from './EducationSection.module.sass'

interface EducationSectionProps {
	className?: string
}

export const EducationSection: FC<EducationSectionProps> = ({ className }) => {
	useEffect(() => {
		const videoUrls = [
			'https://storage.yandexcloud.net/test-backet-kursnova/TaskExtra.mp4',
			'https://storage.yandexcloud.net/test-backet-kursnova/TaskExtra.mp4',
			'https://storage.yandexcloud.net/test-backet-kursnova/TaskExtra.mp4',
		]

		videoUrls.forEach((url) => {
			const video = document.createElement('video')
			video.src = url
			video.preload = 'auto'
			video.muted = true
			video.playsInline = true
			video.style.display = 'none'
			document.body.appendChild(video)
		})
	}, [])

	const ref = useRef(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end end'],
	})

	const sectionRef = useRef(null)

	const [activeStage, setActiveStage] = useState(0)
	const activeStageRef = useRef(0)

	useMotionValueEvent(scrollYProgress, 'change', (latest) => {
		let newStage = 0
		if (latest < 0.33) newStage = 0
		else if (latest < 0.66) newStage = 1
		else newStage = 2

		if (activeStageRef.current !== newStage) {
			activeStageRef.current = newStage
			setActiveStage(newStage)
		}
	})

	return (
		<section
			ref={sectionRef}
			className={clsx(styles.section, className)}
			id='education'
		>
			<div className={styles.inner} ref={ref}>
				<Container>
					<motion.h3
						className={styles.sectionTitle}
						initial={{ opacity: 0, y: 100 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3 }}
						viewport={{ once: true, amount: 0.2 }}
					>
						Как проходит обучение?
					</motion.h3>
				</Container>
				<div className={styles.sticky}>
					<DesktopScrollEducation
						className={styles.desktop}
						activeStage={activeStage}
					/>
					<MobileScrollEducation
						classname={styles.mobile}
						activeStage={activeStage}
					/>
				</div>
			</div>
		</section>
	)
}
