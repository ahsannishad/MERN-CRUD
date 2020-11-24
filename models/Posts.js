const mongoose = require("mongoose");

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

module.exports = Posts;
