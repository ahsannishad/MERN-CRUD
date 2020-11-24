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
						<div className="col-sm-3" key={post._id}>
							<h6>{post.title}</h6>
							<p>{post.description}</p>

							<Link className="nav-link active" to={`/post/${post._id}`}>
								Read More
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Posts;
