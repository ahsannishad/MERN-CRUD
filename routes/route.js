const express = require("express");
const router = express.Router();
const Posts = require("./models/Posts");

router.get("/", (req, res) => {
	Posts.find({}, (error, post) => {
		if (error) {
			res.json(error.message);
		} else {
			res.json(post);
		}
	});
});

module.exports = router;
