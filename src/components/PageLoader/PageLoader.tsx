import type { FC } from 'react'

import styles from './PageLoader.module.sass'
import clsx from 'clsx'

interface PageLoaderProps {
	className?: string
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => {
	return <div className={clsx(styles.wrapper, className)}>Loading...</div>
}
