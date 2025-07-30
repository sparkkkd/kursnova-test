import type { FC } from 'react'
import clsx from 'clsx'

import { CARDS_DATA } from '../../constants'

import styles from './DesktopCards.module.sass'
import { FlipCard } from '../FlipCard/FlipCard'

interface DesktopCardsProps {
	className?: string
}

export const DesktopCards: FC<DesktopCardsProps> = ({ className }) => {
	return (
		<div className={clsx(styles.wrapper, className)}>
			<ul className={styles.list}>
				{CARDS_DATA.map((card, index) => (
					<FlipCard key={index} {...card} />
				))}
			</ul>
		</div>
	)
}
