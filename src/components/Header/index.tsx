import { useContext, useState } from 'react'
import { SearchContext } from '../../contexts/SearchContext'
import Button from '../UI/Button'
import style from './Header.module.scss'
import useAuth from '../../hooks/useAuth'
import LoginModal from '../Auth'

export default function Header() {
	const { averageDuration, lastDuration } = useContext(SearchContext)

	const { isAuthenticated, user, logout } = useAuth()
	const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false)

	const openLoginModal = () => setIsLoginModalOpen(true)
	const closeLoginModal = () => setIsLoginModalOpen(false)
	const handleLogout = () => logout()

	const headerContent = () => {
		if (isAuthenticated && user)
			return (
				<>
					<span>Welcome, {user}</span>
					<span>Average Duration: {averageDuration}</span>
					<span>Last Duration: {lastDuration}</span>
					<Button onClick={handleLogout} className={style.button}>
						Logout
					</Button>
				</>
			)

		return (
			<Button onClick={openLoginModal} className={style.loginButton}>
				Login
			</Button>
		)
	}

	return (
		<>
			<header className={style.header}>{headerContent()}</header>
			<LoginModal isOpen={isLoginModalOpen} onRequestClose={closeLoginModal} />
		</>
	)
}
