import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Posts() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		axios
			.get("/posts")
			.then((result) => {
				setPosts(result.data);
				console.log(result.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<div className="container mt-5">
			<div className="row">
				{posts.map((post) => {
					return (
						<div className="col-sm-3 m-2" key={post._id}>
							<div className="card" style={{ width: "18rem" }}>
								<div className="card-body">
									<h5 className="card-title">{post.title.substring(0, 10)}</h5>

									<p className="card-text">
										{post.description.substring(0, 20)}
									</p>

									<Link className="nav-link active" to={`/post/${post._id}`}>
										Read More
									</Link>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Posts;
