import { useEffect, useLayoutEffect, useState } from 'preact/hooks'
import './app.css'
import { Routes } from './pages/routes'
import { auth } from './services/apis/auth'
import { Login } from './pages/login.page'

export function App() {
	const [userStatus, setStatus] = useState<boolean | null>(null)

	auth.onAuthStateChanged(user => {
		if (user) {
			setStatus(true)
		} else {
			setStatus(false)
		}
	})

	if (userStatus === null) {
		return (
			<div class="flex items-center justify-center min-h-screen">
				<div
					style="border-top-color:transparent"
					class="w-8 h-8 border-4 border-blue-200 rounded-full animate-spin"
				></div>
				<p class="ml-2">Chờ xíu...</p>
			</div>
		)
	}

	if (userStatus)
		return (
			<>
				<Routes />
			</>
		)
	else return <Login />
}
