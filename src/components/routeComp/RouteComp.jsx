import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Mount from "../Mount/Mount";
import Update from "../Update/Update";
import Unmount from "../Unmount/Unmount";
import styles from './routeComp.module.css'

const RouteComp = () =>{

    return (
        <Router>
            <div>
                <nav>
                    <ul className = {styles.ul}>
                        <li className = {styles.li}><Link to="/">Mount</Link></li>
                        <li className = {styles.li}><Link to="/update">Update</Link></li>
                        <li className = {styles.li}><Link to="/unmount">Unmount</Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/update">
                        <Update /> 
                    </Route>
                    <Route path="/unmount">
                        <Unmount /> 
                    </Route>
                    <Route path="/">
                        <Mount /> 
                    </Route>                
                </Switch>
            </div>
        </Router>
    );
}

export default RouteComp;