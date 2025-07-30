import { type FC } from 'react'
import clsx from 'clsx'

import styles from './TeachersSection.module.sass'
import { DesktopTeachers } from './components/DesktopTeachers/DesktopTeachers'
import { MobileTeachers } from './components/MobileTeachers/MobileTeachers'

interface TeachersSectionProps {
	className?: string
}

export const TeachersSection: FC<TeachersSectionProps> = ({ className }) => {
	return (
		<section className={clsx(styles.teachers, className)} id='teachers'>
			<DesktopTeachers className={styles.desktop} />
			<MobileTeachers className={styles.mobile} />
		</section>
	)
}
