import type { FC } from 'react'
import clsx from 'clsx'

import styles from './ScoreInfo.module.sass'

interface ScoreInfoProps {
	className?: string
	scoreCount: string
	scoreText: string
}

export const ScoreInfo: FC<ScoreInfoProps> = ({
	className,
	scoreCount,
	scoreText,
}) => {
	return (
		<div className={clsx(styles.wrapper, className)}>
			<div className={styles.score}>{scoreCount}</div>
			<div className={styles.text}>{scoreText}</div>
		</div>
	)
}
