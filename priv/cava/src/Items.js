import React, { Component } from 'react';

import {Table, TableHead, TableRow, TableCell} from 'react-toolbox/lib/table';

import './Flashcards.css';

class Items extends Component {

  renderItems() {

    const {
      items
    } = this.props;

    this.state = { selected: [], source: items };


    if (!items) {
      return "Loading...";
    }

    return (
      <Table selectable={false} style={{ marginTop: 10 }}>
        <TableHead>
          <TableCell numeric>Item ID</TableCell>
          <TableCell numeric>Item Name</TableCell>
          <TableCell numeric>Item Name</TableCell>
          <TableCell numeric>Item Name</TableCell>
        </TableHead>
        {items.map((item, idx) => (
          <TableRow key={idx}>
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.cost}</TableCell>
            <TableCell>{item.unit && item.unit.name}</TableCell>
          </TableRow>
        ))}
      </Table>
    );
  }

  render() {
    return (
      <div className='Items'>
        {this.renderItems()}
      </div>
    );
  }
}

export default Items;
