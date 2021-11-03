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
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							name="full_name"
							onChange={handleChange}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							name="email"
							onChange={handleChange}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							name="phone"
							onChange={handleChange}
						/>
					</div>
					<div className="form-group">
						<label>City</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter city"
							name="city"
							onChange={handleChange}
						/>
					</div>
					<button type="button" className="btn btn-primary btn-lg my-3 me-3">
						Save!
					</button>
					<Link className="mt-3 w-100 text-center fs-4" to="/">
						Back to contacts
					</Link>
				</form>
			</div>
			<Link to="/ServiceMenu">
				<button className="btn btn-primary m-3">Next</button>
			</Link>
		</div>
	);
};

SignUpPage.propTypes = {
	history: PropTypes.object
};
