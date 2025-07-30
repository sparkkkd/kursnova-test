import type { FC } from 'react'

import styles from './PlansSection.module.sass'
import clsx from 'clsx'
import { Container } from '../../../../components/Container/Container'
import { DesktopPlans } from './components/DesktopPlans/DesktopPlans'
import { MobilePlans } from './components/MobilePlans/MobilePlans'

interface PlansSectionProps {
	className?: string
}

export const PlansSection: FC<PlansSectionProps> = ({ className }) => {
	return (
		<section className={clsx(styles.section, className)}>
			<Container>
				<div className={styles.wrapper}>
					<h3 className={styles.title}>О тарифах</h3>
					<DesktopPlans className={styles.desktop} />
					<MobilePlans className={styles.mobile} />
				</div>
			</Container>
		</section>
	)
}
