import React, { useState, useContext } from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const SignUpPage = () => {
	const { actions } = useContext(Context);

	const [newContact, setnewContact] = useState({
		full_name: null,
		email: null,
		phone: null,
		city: null
	});

	const handleChange = e => setnewContact({ ...newContact, [e.target.name]: e.target.value });

	return (
		<div className="container text-center mt-5">
			<div>
				<h1>Sign Up Page</h1>
				<form className="text-start">
					<div className="form-group my-1">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							name="full_name"
							onChange={handleChange}
						/>
					</div>
					<div className="form-group my-1">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							name="email"
							onChange={handleChange}
						/>
					</div>
					<div className="form-group my-1">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							name="phone"
							onChange={handleChange}
						/>
					</div>
					<div className="form-group my-1">
						<label>City</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter city"
							name="city"
							onChange={handleChange}
						/>
					</div>
				</form>
				<Link to="/PaymentPage">
					<button className="btn btn-primary p-2 mt-3">Next</button>
				</Link>
			</div>
		</div>
	);
};

SignUpPage.propTypes = {
	history: PropTypes.object
};
