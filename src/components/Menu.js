import React from 'react'
import logo from '../images/logo-white.png'

import '../App.css'

const Menu = () => {
	return (
		<div id="secondary" className="ui segment" style={{ borderRadius: '0px' }}>
			<img alt='Nice Giraffics' src={logo} style={{height: '60px'}}/>
		</div>
	)
}

export default Menu
