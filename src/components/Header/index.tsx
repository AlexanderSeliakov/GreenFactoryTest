import { useContext, useState } from 'react'
import { SearchContext } from '../../features/search/context/SearchContext'
import Button from '../UI/Button'
import LoginModal from '../../features/auth/components/Auth'
import useAuth from '../../features/auth/hooks/useAuth'

import style from './Header.module.scss'

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
					<span>Average Fetch Duration: {averageDuration}s</span>
					<span>Last Successful Fetch Duration: {lastDuration}s</span>
					<Button onClick={handleLogout} className={style.logoutButton}>
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
