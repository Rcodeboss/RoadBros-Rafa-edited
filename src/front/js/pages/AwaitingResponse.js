import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const AwaitingResponse = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container mt-5 text-center">
			<p>This is the AwaitingResponse page</p>
			<div className="spinner-border" role="status">
				<span className="visually-hidden">Loading...</span>
			</div>
			<Link to="/MessagesPage">
				<button className="btn btn-primary m-3">Go to Messages</button>
			</Link>
		</div>
	);
};
