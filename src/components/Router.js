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
        <Link to= "/bfwitter/">Home</Link>

      </li>
      <li>
        <Link to= "/bfwitter/login">Login</Link>
      </li>
      <li>
        <Link to= "/bfwitter/hobit">Hobit</Link>

      </li>
    </ul>
            <Switch>
                <Route exact path="/bfwitter/" component={Home}/>
                <Route exact path="/bfwitter/login" component={Login}/>
                <Route exact path="/bfwitter/hobit" component={Hobit}/>
            </Switch>
        </Router>
    )
}

export default AppRouter;