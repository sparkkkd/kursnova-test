import type { FC, PropsWithChildren } from 'react'
import clsx from 'clsx'

import styles from './Tag.module.sass'

interface TagProps extends PropsWithChildren {
	className?: string
}

export const Tag: FC<TagProps> = ({ className, children }) => {
	return <div className={clsx(styles.tag, className)}>{children}</div>
}
