import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Post() {
	const { id } = useParams();
	const [postData, setPostData] = useState([]);

	useEffect(() => {
		axios
			.get(`/post/${id}`)
			.then((res) => {
				setPostData(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [id]);

	return (
		<div className="container mt-5">
			<div className="row">
				<div className="col" key={postData._id}>
					<h1>{postData.title}</h1>
					<h6>{postData._id}</h6>
					<p>{postData.description}</p>
				</div>
			</div>
		</div>
	);
}

export default Post;
