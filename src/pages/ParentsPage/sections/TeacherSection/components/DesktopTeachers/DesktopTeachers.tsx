import { useRef, type FC } from 'react'
import { useScroll, useTransform } from 'framer-motion'
import clsx from 'clsx'

import { TeachersSlider } from '../../../../../StudentsPage/sections/TeachersSection/components/TeachersSlider/TeachersSlider'

import styles from './DesktopTeachers.module.sass'

interface DesktopTeachersProps {
	className?: string
}

export const DesktopTeachers: FC<DesktopTeachersProps> = ({ className }) => {
	const targetRef = useRef<HTMLDivElement>(null)
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ['start 80%', 'end start'],
	})

	const sliderY = useTransform(scrollYProgress, [0, 1], ['10%', '-100%'])

	return (
		<div className={clsx(styles.stickyWrapper, className)} ref={targetRef}>
			<div className={styles.sticky}>
				<TeachersSlider y={sliderY} />
			</div>
		</div>
	)
}
