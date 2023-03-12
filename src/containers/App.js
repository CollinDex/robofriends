import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import './App.css';

class App extends Component {

    constructor() {
        super()
        this.state = {
            robots : [],
            searchfield: ''
        }
    }
    
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots:users}));   
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
        
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });
        
        if (!robots.length) {
            return <div className="center-div"><h1 className="tc bg-light-green br3 pa3 ma2 grow bw2 shadow-5">Loading</h1></div>

        } else {

        return (
            <div className="tc">
            <h1 className="f1">RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange} />
            <Scroll>
            <CardList robots={filteredRobots} /> 
            </Scroll>
            </div>
        );}
    }

    
}

export default App;
