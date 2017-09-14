import React, { Component } from 'react';
import Flashcard from './Flashcard';
import Units from './Units';
import Items from './Items';
import Inventory from './Inventory';
import Button from 'react-toolbox/lib/button/Button';
import Chip from 'react-toolbox/lib/chip/Chip';
import './Flashcards.css';

class Content extends Component {

  renderFlashcards() {

    const {
      selectedPage,
      units,
      items,
      inventory,
      updateUnitState,
      onClickPreviousFlashcard,
      onClickNextFlashcard,
      onClickEdit,
      onClickDelete
    } = this.props;

    if (selectedPage === 'units') {
      return (
        <Units
          units={units}
          updateUnitState={updateUnitState}
        />
      );
    } else if (selectedPage === 'items') {
      return (
        <Items
          items={items}
        />
      );
    } else if (selectedPage === 'inventory') {
      return (
        <Inventory
          inventory={inventory}
        />
      );
    }

    return (
      <div className='Flashcards-content'>
        <div className='Flashcards-button'>
          <Button icon='keyboard_arrow_left' floating
            disabled={true}
            onClick={onClickPreviousFlashcard}
          />
        </div>
        <Flashcard
          flashcard={null}
          onClickEdit={onClickEdit}
          onClickDelete={onClickDelete}
        />
        <div className='Flashcards-button'>
          <Button icon='keyboard_arrow_right' floating
            disabled={true}
            onClick={onClickNextFlashcard}
          />
        </div>
        <div className='Flashcards-index'>
          <Chip>
            {1}
          </Chip>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className='Flashcards'>
        {this.renderFlashcards()}
      </div>
    );
  }
}

export default Content;
