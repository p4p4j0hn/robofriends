import React, { useState, useEffect } from 'react';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

export default function App() {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState('');

  useEffect(() => {
    fetch('https:jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setRobots(users));
  },[]);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  }

  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  return !robots.length ?
    (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <h1 className='f2'>Loading</h1>
      </div>
    ) :
    (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
}
