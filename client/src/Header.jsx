import React from "react";
import { Link } from "react-router-dom";

function Header() {
	return (
		<nav className="navbar navbar-light bg-light">
			<ul className="nav">
				<li className="nav-item">
					<Link className="nav-link " to="/">
						Home
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/posts">
						Posts
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/compose">
						Compose
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Header;
