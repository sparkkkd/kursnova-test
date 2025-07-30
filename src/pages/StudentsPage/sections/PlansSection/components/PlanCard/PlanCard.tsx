import type { FC } from 'react'
import type { IPlan } from '../../constants'
import clsx from 'clsx'

import CheckedIcon from '../../../../../../assets/common/icons/checked.svg?react'
import PremiumEllipse_1 from '../../../../../../assets/students/plans/premium-ellipse-1.svg?react'
import PremiumEllipse_2 from '../../../../../../assets/students/plans/premium-ellipse-2.svg?react'

import styles from './PlanCard.module.sass'

interface PlanCardProps {
	className?: string
	plan: IPlan
}

export const PlanCard: FC<PlanCardProps> = ({ className, plan }) => {
	return (
		<div
			className={clsx(styles.card, className, {
				[styles.freeCard]: plan.title === 'Free-тариф',
				[styles.premiumCard]: plan.title === 'Премиум',
			})}
		>
			<h5 className={styles.title}>{plan.title}</h5>
			<div className={styles.price}>{plan.price}</div>

			<ul className={styles.list}>
				{plan.data.map((item, index) => (
					<li className={styles.item} key={index}>
						<div className={styles.iconWrapper}>
							<CheckedIcon className={styles.icon} />
						</div>
						<div className={styles.itemText}>{item}</div>
					</li>
				))}
			</ul>

			{plan.title === 'Free-тариф' && <div className={styles.freeBg} />}
			{plan.title === 'Премиум' && (
				<div className={styles.premiumBg}>
					<PremiumEllipse_1 className={styles.premiumEllipse_1} />
					<PremiumEllipse_2 className={styles.premiumEllipse_2} />
					<div />
				</div>
			)}
		</div>
	)
}
