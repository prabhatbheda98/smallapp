
import './App.css';
import 'antd/dist/antd.css';
import Navbar from './components/Navbar';
import Home from './components/home page/home';
import Login from "./components/login page/login";
import Register from './components/register/register';
import Forget from './components/forgotpage/forget';
import Setpassword from './components/Setpasswordpage/Setpassword';
import Userprofile from './components/Userprofilepage/Userprofile';
import ItemEditForm from './components/Userprofilepage/Userprofile';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/forget">
            <Forget />
          </Route>
          <Route path="/password-reset/:userId/:token">
            <Setpassword />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/userprofile">
            <Userprofile />
          </Route>
          <Route
            exact
            path="/student/:id/edit"
            render={() => <ItemEditForm />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
