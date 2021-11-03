import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const PaymentPage = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container mt-5 text-center">
			<p>This is the payment page</p>

			<Link to="/ClientHomePage">
				<button className="btn btn-primary m-3">Next (Client)</button>
			</Link>
			<Link to="/ClientRequests">
				<button className="btn btn-primary m-3">Next (Trucker)</button>
			</Link>

			<Link to="/">
				<button className="btn btn-primary m-3">Back home</button>
			</Link>
		</div>
	);
};
