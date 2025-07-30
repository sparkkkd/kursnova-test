import { useEffect } from 'react'

export const useBlockScroll = (
	shouldBlock: boolean,
	ref: React.RefObject<HTMLElement>
) => {
	useEffect(() => {
		if (!shouldBlock || !ref.current) return

		const preventDefault = (e: WheelEvent | TouchEvent) => {
			e.preventDefault()
		}

		window.addEventListener('wheel', preventDefault, { passive: false })
		window.addEventListener('touchmove', preventDefault, { passive: false })

		return () => {
			window.removeEventListener('wheel', preventDefault)
			window.removeEventListener('touchmove', preventDefault)
		}
	}, [shouldBlock, ref])
}
