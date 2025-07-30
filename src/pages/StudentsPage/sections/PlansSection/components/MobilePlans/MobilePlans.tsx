import type { FC } from 'react'
import clsx from 'clsx'

import FreeMobileRect from '../../../../../../assets/students/plans/free-mobile-rect.svg?react'
import PremiumMobileRect from '../../../../../../assets/students/plans/premium-mobile-rect.svg?react'
import CheckIcon from '../../../../../../assets/common/icons/checked.svg?react'
import CloseIcon from '../../../../../../assets/common/icons/close-round.svg?react'

import { MOBILE_PLAN_DATA } from '../../constants'

import styles from './MobilePlans.module.sass'

interface MobilePlansProps {
	className?: string
}

export const MobilePlans: FC<MobilePlansProps> = ({ className }) => {
	return (
		<div className={clsx(styles.wrapper, className)}>
			<div className={styles.types}>
				<div />
				<div className={styles.type}>
					<FreeMobileRect className={styles.rect} />
					<div className={styles.typeTitle}>Free</div>
					<div className={styles.typePrice}>0 ₽</div>
				</div>
				<div className={styles.type}>
					<PremiumMobileRect className={styles.rect} />
					<div className={styles.typeTitle}>Premium</div>
					<div className={styles.typePrice}>от 3 600 ₽/мес.</div>
				</div>
			</div>

			<ul className={styles.list}>
				{MOBILE_PLAN_DATA.map((item, index) => (
					<li className={styles.item} key={index}>
						<div className={styles.title}>{item.title}</div>
						<div className={styles.icon}>
							{item.freeChecked ? <CheckIcon /> : <CloseIcon />}
						</div>
						<div className={styles.icon}>
							{item.premiumChecked ? <CheckIcon /> : <CloseIcon />}
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}
