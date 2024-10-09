import { useEffect, useState } from 'react'
import useAuth from '../../hooks/useAuth'
import Button from '../UI/Button'
import Input from '../UI/Input'

import styles from './LoginModal.module.scss'

interface LoginModalProps {
	isOpen: boolean
	onRequestClose: () => void
}

const LoginModal = (props: LoginModalProps) => {
	const { isOpen, onRequestClose } = props
	const { login } = useAuth()
	const [username, setUsername] = useState<string>('')
	const [error, setError] = useState<string>('')
	const [isLoading, setIsLoading] = useState<boolean>(false)

	// Close the modal when the Escape key is pressed
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onRequestClose()
		}

		if (isOpen) document.addEventListener('keydown', handleKeyDown)

		return () => document.removeEventListener('keydown', handleKeyDown)
	}, [isOpen, onRequestClose])

	// If the modal is not open, don't render anything
	if (!isOpen) return null

	// Handler for submitting the login form
	const handleLogin = (e: React.FormEvent) => {
		e.preventDefault()
		setError('')

		if (username.trim() === '') return setError('Username cannot be empty.')

		setIsLoading(true)
		// Simulate a short delay
		setTimeout(() => {
			login(username)
			setIsLoading(false)
			setUsername('')
			onRequestClose()
		}, 300)
	}

	// Handler for clicking to close the modal
	const handleOverlayClick = () => {
		onRequestClose()
	}

	// Handler to prevent clicks inside the modal content from closing the modal
	const handleContentClick = (e: React.MouseEvent) => {
		e.stopPropagation()
	}

	return (
		<div className={styles.modalOverlay} onClick={handleOverlayClick}>
			<div className={styles.modalContent} onClick={handleContentClick}>
				<Button className={styles.closeButton} onClick={handleOverlayClick}>
					&times;
				</Button>
				<form onSubmit={handleLogin}>
					<Input
						label='Username'
						type='text'
						id='username'
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
					{error && <p className={styles.error}>{error}</p>}
					<Button type='submit' className={styles.loginButton} disabled={isLoading}>
						{isLoading ? 'Logging in...' : 'Login'}
					</Button>
				</form>
			</div>
		</div>
	)
}

export default LoginModal
