import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import {AuthContext} from "./context/AuthContext";
import './App.css';
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";

function App() {
    return (
        <Router>
            <nav><ul>
                <Link className="link" to="/">Home</Link>

                <Link className="link" to="/about">About</Link>
                <Link className="link" to="/profile">Profile</Link>

                <Link className="link" to="/dashboard">Dashboard</Link>

            </ul></nav>

            <Switch>
                <AuthContext>
                    <main>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/about">
                    <About/>
                </Route>
                <Route exact path="/profile">
                    <Profile/>
                </Route>
                <Route exact path="/dashboard">
                    <Dashboard/>
                </Route>
                    </main>
                </AuthContext>
            </Switch>
        </Router>
    );
}

export default App;