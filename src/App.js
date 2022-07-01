import React, { useState, useContext } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Menu from './components/Menu'
import LandingPage from './components/LandingPage'
import ThankYouPage from './components/ThankYouPage'
import { CustomerInfoStore } from './context/CustomerInfoContext'

// import Admin from './components/Admin'

const App = () => {
	return (
		<div>
			<CustomerInfoStore>
				<Router>
					<Menu />
					<Routes>
						<Route path="/" element={<LandingPage />} />
						<Route path="thank-you" element={<ThankYouPage />} />
						{/* <Route path='Admin' element={<Admin/>}/> */}
					</Routes>
				</Router>
			</CustomerInfoStore>
		</div>
	)
}

export default App
