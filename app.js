const express = require("express");
require("dotenv").config();
const path = require("path");
const mongoose = require("mongoose");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//mongoose connect

mongoose
	.connect(process.env.MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false,
	})
	.then(() => {
		console.log("Database connected");
	})
	.catch((err) => {
		console.log(`Database error ${err.message}`);
	});

const postsSchema = new mongoose.Schema({
	title: {
		type: String,
	},
	description: {
		type: String,
	},
});

const Posts = new mongoose.model("Posts", postsSchema);

// Production
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

// Routes
app.get("/posts", (req, res) => {
	Posts.find({}, (error, post) => {
		if (error) {
			res.json(error.message);
		} else {
			res.json(post);
		}
	});
});

app.get("/*", (req, res) => {
	console.log(req);
	res.sendFile(path.join(__dirname, "./client/build", "index1.html"));
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`Server started at port ${port}`);
});
