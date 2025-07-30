import type { FC } from 'react'
import clsx from 'clsx'

import { PlanCard } from '../PlanCard/PlanCard'

import PlanImg from '../../../../../../assets/students/plans/plan-img.svg'
import ArrowImg from '../../../../../../assets/students/plans/arrow.svg'

import { PLAN_DATA } from '../../constants'

import styles from './DesktopPlans.module.sass'

interface DesktopPlansProps {
	className?: string
}

export const DesktopPlans: FC<DesktopPlansProps> = ({ className }) => {
	return (
		<div className={clsx(styles.wrapper, className)}>
			{PLAN_DATA.map((plan) => (
				<PlanCard key={plan.id} plan={plan} />
			))}

			<img className={styles.img} src={PlanImg} alt='' />
			<img className={styles.arrow} src={ArrowImg} alt='' />
		</div>
	)
}
