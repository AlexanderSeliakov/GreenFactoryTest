import useAuth from './hooks/useAuth'

import SearchPage from './components/SearchPage'
import Header from './components/Header'

const App = () => {
	const { isAuthenticated } = useAuth()

	// Simplified ProtectedRoute for better readability
	const ProtectedRoute = () => {
		if (isAuthenticated) return <SearchPage />
		return <p>Please log in to search for books.</p>
	}

	return (
		<>
			<Header />
			{ProtectedRoute()}
		</>
	)
}

export default App
