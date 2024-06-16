import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import UserDash from "./pages/UserDash";
import AdminDash from "./pages/AdminDash";
import UploadForm from "./pages/UploadForm";

function App() {
	return (
		<div className="App">
			<Router>
				<nav>
					<Link to="/" className="link-spacing">Home</Link>
					<Link to="/login" className="link-spacing">Login</Link>
					<Link to="/landing" className="link-spacing">Landing</Link>
					<Link to="/userdash" className="link-spacing">User Dashboard</Link>
					<Link to="/admindash" className="link-spacing">Admin Dashboard</Link>
					<Link to="/uploadform" className="link-spacing">Upload Form</Link>
				</nav>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/landing" element={<Landing />} />
					<Route path="/userdash" element={<UserDash />} />
					<Route path="/admindash" element={<AdminDash />} />
					<Route path="/uploadform" element={<UploadForm />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
