import React, { Component } from 'react';

import {Table, TableHead, TableRow, TableCell} from 'react-toolbox/lib/table';
import Button from 'react-toolbox/lib/button/Button';

import UnitDialog from './UnitDialog';
import * as utils from './utils';
import * as actions from './actions';

import './Flashcards.css';

class Units extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      unitInDialog: null,
      units: null
    };

    this.handleCreateUnit = this.handleCreateUnit.bind(this);
    this.handleChangeUnit = this.handleChangeUnit.bind(this);
    this.handleCancelUnitDialog = this.handleCancelUnitDialog.bind(this);
    this.handleSaveUnit = this.handleSaveUnit.bind(this);
  }

  handleCreateUnit() {
    const unitInDialog = {
      name: '',
    };
    this.setState({ unitInDialog: unitInDialog });
  }

  handleCancelUnitDialog() {
    this.setState({ unitInDialog: null });
  }

  handleChangeUnit(field, value) {
    this.setState(prevState => {
      const { unitInDialog } = prevState;
      const newUnitInDialog = Object.assign(
        {},
        unitInDialog,
        { [field]: value }
      );
      return { unitInDialog: newUnitInDialog };
    });
  }

  handleSaveUnit(unit) {
    utils.createUnit({ token: this.props.token, unit })
      .then(response => {
        this.props.updateUnitState(unit, response);
      });
    this.setState({ unitInDialog: null });
  }

  renderUnits() {

    const {
      units
    } = this.props;

    const unitInDialog = this.state.unitInDialog;

    if (!units) {
      return "Loading...";
    }

    return (
      <div className='Units'>
        <Table selectable={false} style={{ marginTop: 10 }}>
          <TableHead>
            <TableCell numeric>Unit ID</TableCell>
            <TableCell numeric>Unit Name</TableCell>
          </TableHead>
          {units.map((item, idx) => (
            <TableRow key={idx}>
              <TableCell><div>{item.id}</div></TableCell>
              <TableCell><div>{item.name}</div></TableCell>
            </TableRow>
          ))}
        </Table>
        <div className='Main-button'>
          <Button
            icon='add'
            floating
            accent
            onClick={this.handleCreateUnit}
          />
        </div>
        <UnitDialog
          unit={unitInDialog}
          onChange={this.handleChangeUnit}
          onSave={this.handleSaveUnit}
          onCancel={this.handleCancelUnitDialog}
        />
      </div>

    );
  }

  render() {
    return (
      <div className='Units'>
        {this.renderUnits()}
      </div>
    );
  }
}

export default Units;
