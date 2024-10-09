import { createContext, useState, ReactNode, useEffect } from 'react'

interface AuthContextProps {
	user: string | null
	isAuthenticated: boolean
	login: (username: string) => void
	logout: () => void
}

interface AuthProviderProps {
	children: ReactNode
}

export const AuthContext = createContext<AuthContextProps>({
	user: null,
	isAuthenticated: false,
	login: () => {},
	logout: () => {},
})

export const AuthProvider = (props: AuthProviderProps) => {
	const { children } = props
	const [user, setUser] = useState<string | null>(null)
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

	useEffect(() => {
		const storedUser = localStorage.getItem('user')
		if (storedUser) {
			setIsAuthenticated(true)
			setUser(storedUser)
		}
	}, [])

	const login = async (username: string) => {
		if (username.trim() !== '') {
			setIsAuthenticated(true)
			setUser(username)
			localStorage.setItem('user', username)
		}
	}

	const logout = () => {
		setIsAuthenticated(false)
		setUser(null)
		localStorage.removeItem('user')
	}

	return (
		<AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
			{children}
		</AuthContext.Provider>
	)
}
