import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { AuthProvider } from './contexts/AuthContext.tsx'
import { SearchProvider } from './contexts/SearchContext.tsx'
import App from './App.tsx'

import './styles/index.scss'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<SearchProvider>
					<App />
				</SearchProvider>
			</AuthProvider>
		</QueryClientProvider>
	</StrictMode>
)
