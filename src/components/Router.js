import React, {useState} from "react";
import { BrowserRouter as Router, Route,Switch,Link} from 'react-router-dom';
import Home from '../routes/Home';
import Login from '../routes/Login';
import Hobit from "../routes/Hobit";
const AppRouter = () => {

    return(
        <Router>
            <ul>
      <li>
        <Link to= "/">Home</Link>

      </li>
      <li>
        <Link to= "/login">Login</Link>
      </li>
      <li>
        <Link to= "/hobit">Hobit</Link>

      </li>
    </ul>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/hobit" component={Hobit}/>
            </Switch>
        </Router>
    )
}

export default AppRouter;