import React, { useState, useContext } from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const LoginPage = () => {
	const { actions } = useContext(Context);

	const [newContact, setnewContact] = useState({
		email: null,
		password: null
	});

	const handleChange = e => setnewContact({ ...newContact, [e.target.name]: e.target.value });

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Login Page</h1>
				<form>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Email"
							name="email"
							onChange={handleChange}
						/>
					</div>
					<div className="form-group">
						<label>Password</label>
						<input
							type="password"
							className="form-control"
							placeholder="Password"
							name="password"
							onChange={handleChange}
						/>
					</div>
				</form>
				<Link to="/ClientHomePage">
					<button type="button" className="btn btn-primary btn-lg my-3 p-2 me-3">
						Client
					</button>
				</Link>
				<Link to="/TruckerHomePage">
					<button type="button" className="btn btn-primary btn-lg my-3 p-2 me-3">
						Trucker
					</button>
				</Link>
			</div>
		</div>
	);
};

LoginPage.propTypes = {
	history: PropTypes.object
};
