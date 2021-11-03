import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const ClientRequests = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container mt-5 text-center">
			<p>This is the ClientRequests page</p>

			<ul className="list-group">
				{store.listOfRequests.map((item, index) => {
					return (
						<li className="list-group-item d-inline-flex align-items-center" key={index}>
							<img src={item.picture} className="img-fluid m-2" width="10%" height="50%" alt="..." />
							<p className="mx-2 text-start">Name: {`${item.firstName} ${item.lastName}`}</p>
							<p className="mx-2 text-start">City: {item.city}</p>
							<p className="mx-2 text-start">Car Model: {item.carModel}</p>
							<p className="mx-2 text-start">Car Make: {item.carMake}</p>
							<p className="mx-2 text-start">Car Year: {item.carYear}</p>

							<Link to="/MessagesPage">
								<button className="btn btn-primary m-2 p-1">Accept</button>
							</Link>
						</li>
					);
				})}
			</ul>

			<Link to="/">
				<button className="btn btn-primary m-3">Back home</button>
			</Link>
		</div>
	);
};
