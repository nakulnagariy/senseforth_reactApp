import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export class BasicExample extends React.Component {
    render(){
        return (
            <div>
                <Router>
                    <div>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                                <Link to="/about">About</Link>
                                {/* <Link to="/topics">Topics</Link> */}
                            </li>
                        </ul>
                        <hr />

                        <Route exact path="/" Component={Home} />
                        <Route path="/about" Component={About} />
                        {/* <Route path="/topics" Component={Topics} /> */}
                    </div>
            </Router>
        </div>
        );       
    }
}

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);

const About = () => (
    <div>
        <h2>About</h2>
    </div>
);

export default BasicExample;