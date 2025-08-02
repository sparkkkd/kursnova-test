import { useLenis } from 'lenis/react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const ScrollToTop = () => {
	const lenis = useLenis()
	const { pathname } = useLocation()

	useEffect(() => {
		if (lenis) {
			lenis.scrollTo(0, { immediate: true })
		}
	}, [pathname])

	return null
}
