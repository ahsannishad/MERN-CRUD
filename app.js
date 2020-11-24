const express = require("express");
require("dotenv").config();
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/posts", require("./routes/route"));

// Production
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

app.get("/*", function (req, res) {
	res.sendFile(
		path.join(__dirname, "client", "build", "index.html"),
		function (err) {
			if (err) {
				res.status(500).send(err);
			}
		}
	);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`Server started at port ${port}`);
});
