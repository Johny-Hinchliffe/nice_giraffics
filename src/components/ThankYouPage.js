import React from 'react'
import {Link} from 'react-router-dom'
import welcome from '../images/welcome.png'

const ThankYouPage = () => {
  return (
    <div>
        <div className="ui container">
			<div className="ui grid">
				<div className="sixteen wide column center aligned">
					<img
						className=" image"
						id="hero2"
						src={welcome}
						alt=""
					/>
				</div>
				<div className="sixteen wide column center aligned">
					<p id="text" className="ui center aligned huge text">
                    Thank you so much for your interest in Nice Giraffics! <br />
						We've got lots in the making and can't wait to share it with you!
					</p>
				</div>
                <div className="sixteen wide column center aligned">
					<p id="text2" className="ui center aligned huge text">
                    You'll recieve an email when we're ready for you to come back and have a look around!
					</p>
				</div>
				<div className="sixteen wide column center aligned">
					<form className="ui form">
						<div className="equal width fields">
						</div>
					</form>
				</div>
			</div>
		</div>
        </div>
  )
}

export default ThankYouPage