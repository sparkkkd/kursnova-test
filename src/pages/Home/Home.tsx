import { useEffect, type FC } from 'react'
import ReactLenis, { useLenis } from 'lenis/react'
import { setIsCanAddSection, setIsModalOpen } from '../../store/slices/uiSlice'
import { useAppDispatch, useAppSelector } from '../../store/hooks'

import { Container } from '../../components/Container/Container'
import { Header } from '../../modules/Header/Header'
import { Footer } from '../../modules/Footer/Footer'
import { StudentsPage } from '../StudentsPage/StudentsPage'
import { ParentsPage } from '../ParentsPage/ParentsPage'

import { Modal } from '../../modules/Modal/Modal'
import { TryForm } from '../../modules/TryForm/TryForm'
import { SuccessModal } from '../../modules/SuccessModal/SuccessModal'
import { MobileTryButton } from '../../modules/MobileTryButton/MobileTryButton'
import { TryButton } from '../../modules/TryButton/TryButton'
import { SwitchMode } from '../../modules/SwitchMode/SwitchMode'
import { Sidebar } from '../../modules/Sidebar/Sidebar'

import styles from './Home.module.sass'

interface HomeProps {}

export const Home: FC<HomeProps> = ({}) => {
	const { mode, isModalSuccess } = useAppSelector((state) => state.uiReducer)
	const dispatch = useAppDispatch()

	const lenis = useLenis()

	useEffect(() => {
		if (lenis) lenis?.scrollTo(0, { duration: 0, immediate: true })
		dispatch(setIsCanAddSection(false))
	}, [mode])

	return (
		<>
			<main className={styles.main}>
				<ReactLenis root />

				<Sidebar />

				<Container className={styles.modeWrapper}>
					<SwitchMode className={styles.mode} />
				</Container>

				<TryButton onClick={() => dispatch(setIsModalOpen(true))} />
				<MobileTryButton onClick={() => dispatch(setIsModalOpen(true))} />

				<Modal>
					{!isModalSuccess && <TryForm />}
					{isModalSuccess && <SuccessModal />}
				</Modal>

				<Header />
				{mode === 'students' && <StudentsPage />}
				{mode === 'parents' && <ParentsPage />}
				<Footer />
			</main>
		</>
	)
}
