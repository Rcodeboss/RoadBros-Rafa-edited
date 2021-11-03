import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const ManagingService = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container mt-5 text-center">
			<p>This is the ManagingService Page</p>

			<button className="btn btn-primary m-3">Start Service</button>

			<Link to="/TruckerHomePage">
				<button className="btn btn-primary m-3">End Service</button>
			</Link>
		</div>
	);
};
