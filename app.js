const express = require("express");
require("dotenv").config();
const path = require("path");

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/api/posts", require("./routes/route"));

// Production
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
