import { Component } from 'react';

class Header extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false; // this is a dumb component so we can do this.
  }
  render() {
    return <h1 className='f1-ns fw2'>RoboFriends</h1>;
  }
}

export default Header;
