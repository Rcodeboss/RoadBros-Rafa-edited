import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const ServiceMenu = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container mt-5 text-center">
			<p>This is the service menu page</p>
			<div className="list-group text-start">
				<label className="list-group-item d-flex align-items-center m-0">
					<input className="form-check-input m-1" type="checkbox" value="" />
					<h6 className="me-2 m-0 d-flex align-items-center">Service Name: $Price</h6>
				</label>
				<label className="list-group-item d-flex align-items-center m-0">
					<input className="form-check-input m-1" type="checkbox" value="" />
					<h6 className="me-2 m-0 d-flex align-items-center">Service Name: $Price</h6>
				</label>
				<label className="list-group-item d-flex align-items-center m-0">
					<input className="form-check-input m-1" type="checkbox" value="" />
					<h6 className="me-2 m-0 d-flex align-items-center">Service Name: $Price</h6>
				</label>
				<label className="list-group-item d-flex align-items-center m-0">
					<input className="form-check-input m-1" type="checkbox" value="" />
					<h6 className="me-2 m-0 d-flex align-items-center">Service Name: $Price</h6>
				</label>
				<label className="list-group-item d-flex align-items-center m-0">
					<input className="form-check-input m-1" type="checkbox" value="" />
					<h6 className="me-2 m-0 d-flex align-items-center">Service Name: $Price</h6>
				</label>
			</div>
			<Link to="/PaymentPage">
				<button className="btn btn-primary m-3">Next</button>
			</Link>

			<Link to="/">
				<button className="btn btn-primary m-3">Back home</button>
			</Link>
		</div>
	);
};
