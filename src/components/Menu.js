import React from 'react'
import logo from '../images/logo-white.png'

import '../App.css'

const Menu = () => {
	return (
		<div id="secondary" className="ui segment" style={{ borderRadius: '0px' }}>
			<img id="logo" alt='Nice Giraffics' src={logo}/>
		</div>
	)
}

export default Menu
