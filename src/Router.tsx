// import { createBrowserRouter, Navigate } from 'react-router-dom'

// import Home from './pages/Home'
// import Login from './pages/Login'
// import NotFound from './pages/NotFound'
// import { useAuth } from './contexts/AuthContext'

// interface ProtectedRouteProps {
// 	children: React.ReactNode
// }

// export const ProtectedRoute = (props:ProtectedRouteProps) => {
// 	const { user } = useAuth()
// 	if (!user) {
// 		return <Navigate to='/login' />
// 	}
// 	return props.children
// }

// export const router = createBrowserRouter([
// 	{
// 		path: '/',
// 		element: (
// 			<ProtectedRoute>
// 				<Home />,
// 			</ProtectedRoute>
// 		),
// 	},
// 	{
// 		path: '/login',
// 		element: <Login />,
// 	},
// 	{
// 		path: '/*',
// 		element: <NotFound />,
// 	},
// ])
