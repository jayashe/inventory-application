import React, { Component } from 'react';

import {Table, TableHead, TableRow, TableCell} from 'react-toolbox/lib/table';

import './Flashcards.css';

class Inventory extends Component {

  renderInventory() {

    const {
      inventory
    } = this.props;

    this.state = { selected: [], source: inventory };

    if (!inventory) {
      return "Loading...";
    }

    return (
      <Table selectable={false} style={{ marginTop: 10 }}>
        <TableHead>
          <TableCell numeric>Store Name</TableCell>
          <TableCell numeric>Item Name</TableCell>
          <TableCell numeric>Quantity</TableCell>
          <TableCell numeric>Unit</TableCell>
          <TableCell numeric>Cost per Unit</TableCell>
          <TableCell numeric>Timestamp</TableCell>
        </TableHead>
        {inventory.map((inventory, idx) => (
          <TableRow key={idx}>
            <TableCell><div>{inventory.user && inventory.user.store_name}</div></TableCell>
            <TableCell>{inventory.item && inventory.item.name}</TableCell>
            <TableCell>{inventory.quantity}</TableCell>
            <TableCell>{inventory.item && inventory.item.cost}</TableCell>
            <TableCell>{inventory.item && 
                  inventory.item.unit &&
                  inventory.item.unit.name}</TableCell>
            <TableCell><div></div></TableCell>

          </TableRow>
        ))}
      </Table>
    );
  }

  render() {
    return (
      <div className='Inventory'>
        {this.renderInventory()}
      </div>
    );
  }
}

export default Inventory;
