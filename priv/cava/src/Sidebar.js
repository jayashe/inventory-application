import React, { Component } from 'react';
import PageList from './PageList'
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <div className='Sidebar'>
        <PageList
          onPageSelect={this.props.onPageSelect}
        />
      </div>
    );
  }
}

export default Sidebar;
