const express = require("express");
require("dotenv").config();
const path = require("path");
const mongoose = require("mongoose");
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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

// Routes
// app.use("/api/posts", require("./routes/route"));
// app.use("/api/readpost", require("./routes/route"));

app.get("/api/posts", (req, res) => {
	Posts.find({}, (error, post) => {
		if (error) {
			res.json(error.message);
		} else {
			res.json(post);
		}
	});
});

app.get("/api/post/:id", (req, res) => {
	Posts.find({ _id: req.params.id }, (error, post) => {
		if (error) {
			res.json(error.message);
		} else {
			res.json(post);
		}
	});
});

app.post("/api/compose", (req, res) => {
	console.log(req.body.title, req.body.description);
	const post = new Posts({
		title: req.body.title,
		description: req.body.description,
	});

	post
		.save()
		.then((success) => {
			res.send("successfully post saved");
		})
		.catch((error) => {
			console.log(error);
		});
});

app.delete("/api/deleteall", (req, res) => {
	[
		Posts.deleteMany({}, (error, success) => {
			if (!error) {
				[res.send("All posts deleted successfully")];
			}
		}),
	];
});

// Production setup

if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));

	app.get("*", (req, res) => {
		res.sendFile(path.join(__dirname, "client", "build", "index.html"));
	});
}
console.log(process.env.NODE_ENV);

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`Server started at port ${port}`);
});
