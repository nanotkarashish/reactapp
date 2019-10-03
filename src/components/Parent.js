import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ToggleBox from './ToggleBox';
import CountBox from './CountBox';

class Parent extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [
                'LIKE',
                'DISLIKE',
                'LIKE',
                'LIKE'
            ]
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle(index) {
        let item = this.state.items[index];
        let items = this.state.items;
        items[index] = item === "LIKE" ? "DISLIKE" : "LIKE"
        this.setState({items: items});
    }

    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                            <Link to="/">Home</Link>
                            </li>
                            <li>
                            <Link to="/toggle">Toggle</Link>
                            </li>
                            <li>
                            <Link to="/count">Count</Link>
                            </li>
                        </ul>
                    </nav>
                    {/* A <Switch> looks through its children <Route>s and
                        renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/toggle">
                            <ToggleBox />
                        </Route>
                        <Route path="/count">
                            <CountBox />
                        </Route>
                        <Route path="/">
                            <ToggleBox />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Parent;
