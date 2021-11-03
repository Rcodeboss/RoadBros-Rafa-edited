import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const ServiceCompleted = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container mt-5 text-center">
			<h1>
				Congratulations! <br />
				Your Service was Completed
			</h1>

			<h5 className="m-4">Please rate your trucker below</h5>

			<Link to="/RatingPage">
				<button className="btn btn-primary m-3">Rate Trucker</button>
			</Link>
		</div>
	);
};
