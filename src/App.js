import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Menu from './components/Menu'
import LandingPage from './components/LandingPage'

// import Admin from './components/Admin'

const App = () => {
	return (
		<div>
			<Router>
				<Menu />
				<Routes>
					<Route path="/" element={<LandingPage />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
