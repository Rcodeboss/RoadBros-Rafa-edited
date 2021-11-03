import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const ServiceCompleted = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container mt-5 text-center">
			<p>This is the ServiceCompleted page</p>
			<Link to="/RatingPage">
				<button className="btn btn-primary m-3">Rate Trucker</button>
			</Link>
		</div>
	);
};
