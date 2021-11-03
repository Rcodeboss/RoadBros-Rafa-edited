import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const AvailableTruckers = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container mt-5 text-center">
			<p>This is the AvailableTruckersMenu page</p>

			<Link to="/AwaitingResponse">
				<button className="btn btn-primary m-2">Request Help</button>
			</Link>
		</div>
	);
};
