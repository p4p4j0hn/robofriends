import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: '',
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

<<<<<<< Updated upstream
  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return !robots.length ?
      (
        <div className='tc'>
          <h1 className='f1-ns fw2'>RoboFriends</h1>
          <h1 className='f2-ns'>Loading</h1>
        </div>
      ) :
      (
        <div className='tc wrapper'>
          <div className='header'>
            <h1 className='f1-ns fw2'>RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange} />
          </div>
          <Scroll>
            <ErrorBoundary fallback={<h2>Oooops. That is not good.</h2>}>
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }
=======
  return !robots.length ?
    (
      <div className='tc'>
        <h1 className='f1 fw2'>RoboFriends</h1>
        <h1 className='f2'>Loading</h1>
      </div>
    ) :
    (
      <div className='tc'>
        <h1 className='f1 fw2'>RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundary fallback={<h2>Oooops. That is not good.</h2>}>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
>>>>>>> Stashed changes
}

export default App;
