import React, { Component } from 'react';

import SearchBox from './SearchBox';
import Scroll from './Scroll';
import CardList from './CardList';
import ErrorBoundary from './ErrorBoundary';
import Header from './Header';
import './MainPage.css';

class MainPage extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  filteredRobots = (robots) => {
    return robots.filter((robot) => {
      return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
    });
  };

  render() {
    const { onSearchChange, robots, isPending } = this.props;

    return isPending ? (
      <div className='tc'>
        <Header />
        <h1 className='f2-ns'>Loading</h1>
      </div>
    ) : (
      <div className='tc wrapper'>
        <div className='header'>
          <Header />
          <SearchBox searchChange={onSearchChange} />
        </div>
        <Scroll>
          <ErrorBoundary fallback={<h2>Oooops. That is not good.</h2>}>
            <CardList robots={this.filteredRobots(robots)} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default MainPage;
