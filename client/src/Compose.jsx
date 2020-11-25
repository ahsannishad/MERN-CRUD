import Axios from "axios";
import React, { useState } from "react";

function Compose() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	return (
		<div className="container text-center mt-5">
			<form
				onSubmit={(event) => {
					event.preventDefault();

					Axios.post("/api/compose", { title, description })
						.then((res) => {
							console.log("Post recorded");
							setTitle("");
							setDescription("");
						})
						.catch((error) => {
							console.log(error);
						});
				}}
			>
				<div className="form-group">
					<input
						type="text"
						className="from-control"
						placeholder="Title"
						onChange={(event) => {
							setTitle(event.target.value);
						}}
					/>
					<input
						type="text"
						className="from-control"
						placeholder="description"
						onChange={(event) => {
							setDescription(event.target.value);
						}}
					/>

					<button type="submit">Submit</button>
				</div>
			</form>
		</div>
	);
}

export default Compose;
