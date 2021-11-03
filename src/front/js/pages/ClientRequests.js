import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const ClientRequests = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container mt-5 text-center">
			<h1 className="mb-4">Client Requests Page</h1>

			<ul className="list-group">
				{store.listOfRequests.map((item, index) => {
					return (
						<li className="list-group-item d-inline-flex align-items-center" key={index}>
							<img
								src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvectorified.com%2Fimages%2Ficon-roadside-assistance-6.png&f=1&nofb=1"
								className="img-fluid m-1"
								width="15%"
								height="50%"
								alt="..."
							/>
							<p className="mx-2 text-start">Name: {item.fullName}</p>
							<p className="mx-2 text-start">City: {item.city}</p>
							<p className="mx-2 text-start">Vehicle Model: {item.vehicleModel}</p>
							<p className="mx-2 text-start">Vehicle Make: {item.vehicleMake}</p>
							<p className="mx-2 text-start">Vehicle Year: {item.vehicleYear}</p>

							<Link to="/MessagesPage">
								<button className="btn btn-primary m-2 p-1">Accept</button>
							</Link>
						</li>
					);
				})}
			</ul>

			<Link to="/TruckerHomePage">
				<button className="btn btn-primary m-3">Home</button>
			</Link>
		</div>
	);
};
