import React from "react";
import { Link } from "react-router-dom";

export const MyNavbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<Link to="/" className="navbar-brand">
					RoadBros
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<a className="nav-link active" aria-current="page" href="#">
							Home
						</a>
						<a className="nav-link" href="#">
							Add Cars
						</a>
						<a className="nav-link" href="#">
							History
						</a>
						<a className="nav-link" href="#">
							Help
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

/*import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavDropdown } from "react-bootstrap";
import { Nav } from "react-bootstrap";

export const myNavbar = () => {
	return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Brand href="#home">RoadBros</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<NavDropdown title="Dropdown" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Add Cars</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">History</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">Help</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};*/
