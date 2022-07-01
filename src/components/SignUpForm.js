import React from 'react'
import { Form, Field } from 'react-final-form'

const SignUpForm = (props) => {
	const renderError = ({ error, touched }) => {
		if (touched && error) {
			return (
				<div className="ui error message">
					<div className="header">{error}</div>
				</div>
			)
		}
	}

	const renderInput = ({ input, label, meta }) => {
		const className = `field ${meta.error && meta.touched ? 'error' : ''}`
		return (
			<div className={className}>
				<label>{label}</label>
				<input {...input} autoComplete="off" />
				{renderError(meta)}
			</div>
		)
	}

	const onSubmit = (formValues) => {
		props.onSubmit(formValues)
	}

	return (
		<Form
			initialValues={props.initialValues}
			onSubmit={onSubmit}
			validate={(formValues) => {
				const errors = {}

				if (!formValues.name) {
					errors.name = 'You must enter your name'
				}

				if (!formValues.email) {
					errors.email = 'You must enter an email'
				}

				return errors
			}}
			render={({ handleSubmit }) => (
				<form onSubmit={handleSubmit} className="ui form error">
					<div className="equal width fields">
						<div className="seven wide field">
							<Field name="name" component={renderInput} label="Enter Name" />
						</div>
						<div className="seven wide field">
							<Field name="email" component={renderInput} label="Enter Email" />
						</div>
						<div className="two wide field">
							<button className="ui animated button" tabIndex="0">
								<div className="visible content">Next</div>
								<div className="hidden content">
									<i className="right arrow icon"></i>
								</div>
							</button>
						</div>
					</div>
				</form>
			)}
		/>
	)
}

export default SignUpForm
