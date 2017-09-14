import React, { Component } from 'react';
import List from 'react-toolbox/lib/list/List';
import ListItem from 'react-toolbox/lib/list/ListItem';
import ListSubHeader from 'react-toolbox/lib/list/ListSubHeader';
import './PageList.css';

class PageList extends Component {
  onPageSelect(page) {
    this.props.onPageSelect(page);
  }

  renderPageList() {
    // if (tags == null) {
    //   return (
    //     <div className='Tags-loading'>
    //       Loading...
    //     </div>
    //   );
    // }

    //const sortedTags = sortObjects(tags, 'name');

    return (
      <List selectable ripple>
        <ListSubHeader caption='Pages' />
          {<ListItem
            key='inventory'
            caption='Inventory'
            onClick={this.onPageSelect.bind(this, 'inventory')}
          />}
          {<ListItem
            key='items'
            caption='Items'
            onClick={this.onPageSelect.bind(this, 'items')}
          />}
          {<ListItem
            key='units'
            caption='Units of Measurement'
            onClick={this.onPageSelect.bind(this, 'units')}
          />}
      </List>
    );
  }

  render() {
    return (
      <div className='PageList'>
        {this.renderPageList()}
      </div>
    );
  }
}

export default PageList;
