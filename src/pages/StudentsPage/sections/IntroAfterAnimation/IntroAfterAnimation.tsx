import type { FC } from 'react'

import styles from './IntroAfterAnimation.module.sass'
import { TitleWithBombs } from '../IntroSection/components/TitleWithBombs/TitleWithBombs'

interface IntroAfterAnimationProps {}

export const IntroAfterAnimation: FC<IntroAfterAnimationProps> = ({}) => {
	return (
		<section className={styles.section}>
			<TitleWithBombs />
		</section>
	)
}
