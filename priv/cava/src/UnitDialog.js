import React, { Component } from 'react';
import Dialog from 'react-toolbox/lib/dialog/Dialog';
import Input from 'react-toolbox/lib/input/Input';
import './FlashcardDialog.css'

class UnitDialog extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClickCancel = this.handleClickCancel.bind(this);
    this.handleClickSave = this.handleClickSave.bind(this);
  }

  handleChange(field, value) {
    this.props.onChange(field, value);
  }

  handleClickSave() {
    this.props.onSave(this.props.unit);
  }

  handleClickCancel() {
    this.props.onCancel();
  }

  render() {
    if (this.props.unit == null) {
      return null;
    }

    const { name } = this.props.unit;

    return (
      <Dialog
        title='Create Unit of Measurement'
        active={true}
        actions={[
          { label: 'Cancel', onClick: this.handleClickCancel },
          { label: 'Save', onClick: this.handleClickSave }
        ]}
        onOverlayClick={this.handleClickCancel}
        onEscKeyDown={this.handleClickCancel}
      >
        <Input
          type='text'
          name='name'
          label='Name'
          value={name}
          required={true}
          multiline={true}
          onChange={this.handleChange.bind(null, 'name')}
        />
      </Dialog>
    )
  }
}

export default UnitDialog;
