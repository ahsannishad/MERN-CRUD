import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Posts from "./Posts";
import Post from "./Post";
import Header from "./Header";
import Compose from "./Compose";
import NotFound from "./NotFound";

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/posts" component={Posts} />
					<Route exact path="/post/:id" component={Post} />
					<Route path="/compose" exact>
						<Compose />
					</Route>
					<Route component={NotFound} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
