import hero from '../images/hero2.png'


const LandingPage = () => {
	
	return (
		<div className="ui container">
			<div className="ui grid">
				<div className="sixteen wide column center aligned">
					<img
						className=" image"
						id="hero"
						src={hero}
						alt="We're just getting started! Nice Giraffics. Original Design *Cartoon of giraffe meditating"
					/>
				</div>
				<div className="sixteen wide column center aligned">
					<p id="text" className="ui center aligned huge text">
						Our website isn't quite ready, but you can bet your giraffe we're working on it!
					</p>
				</div>
			</div>
		</div>
	)
}

export default LandingPage
