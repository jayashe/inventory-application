import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Flashcards from './Flashcards';
import Content from './Content';
import * as utils from '../utils/utils';
import * as actions from '../utils/actions';
import './Main.css';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: null,
      tags: null,
      units: null,
      inventory: null,
      selectedPage: 'inventory',
      flashcards: null,
      selectedFlashcardIndex: null,
      flashcardInDialog: null
    };

    this.handlePageSelect = this.handlePageSelect.bind(this);
    this.handleClickPreviousFlashcard = this.handleClickPreviousFlashcard.bind(this);
    this.handleClickNextFlashcard = this.handleClickNextFlashcard.bind(this);
    this.handleCancelFlashcardDialog = this.handleCancelFlashcardDialog.bind(this);
    this.handleCreateFlashcard = this.handleCreateFlashcard.bind(this);
    this.handleEditFlashcard = this.handleEditFlashcard.bind(this);
    this.handleChangeFlashcard = this.handleChangeFlashcard.bind(this);
    this.handleSaveFlashcard = this.handleSaveFlashcard.bind(this);
    this.handleDeleteFlashcard = this.handleDeleteFlashcard.bind(this);

    this.addUnit = this.addUnit.bind(this);
  }

  handlePageSelect(page) {
    this.setState({ selectedPage: page });
  }

  handleClickPreviousFlashcard() {
    this.setState(prevState => {
      return {
        selectedFlashcardIndex: Math.max(0, prevState.selectedFlashcardIndex - 1)
      };
    });
  }

  handleClickNextFlashcard() {
    this.setState(prevState => {
      return {
        selectedFlashcardIndex: Math.min(prevState.selectedFlashcardIndex + 1, prevState.flashcards.length - 1)
      };
    });
  }

  handleCancelFlashcardDialog() {
    this.setState({ flashcardInDialog: null });
  }

  handleCreateFlashcard() {
    const flashcard = {
      question: '',
      answer: '',
      tags: []
    };
    this.setState({ flashcardInDialog: flashcard });
  }

  handleEditFlashcard(flashcard) {
    this.setState({ flashcardInDialog: flashcard });
  }

  handleChangeFlashcard(field, value) {
    this.setState(prevState => {
      const { flashcardInDialog } = prevState;
      const newFlashcardInDialog = Object.assign(
        {},
        flashcardInDialog,
        { [field]: value }
      );
      return { flashcardInDialog: newFlashcardInDialog };
    });
  }

  handleSaveFlashcard(flashcard) {
    if (flashcard.id) {
      this.updateFlashcard(flashcard);
    } else {
      this.createFlashcard(flashcard);
    }
  }

  handleDeleteFlashcard(flashcard) {
    this.deleteFlashcard(flashcard);
  }

  componentDidMount() {
    this.fetchUnits();
    this.fetchItems();
    this.fetchInventory();
  }

  componentDidUpdate(prevProps, prevState) {
    const currentTagId = this.state.selectedTagId;
    const prevTagId = prevState.selectedTagId;

    if (currentTagId === prevTagId || currentTagId == null) {
      return;
    }

    this.fetchFlashcards(currentTagId);
  }

  render() {
    const {
      info,
      tags,
      units,
      items,
      inventory,
      selectedPage,
      flashcards,
      selectedFlashcardIndex,
      flashcardInDialog
    } = this.state;


    return (
      <div className='Main'>
        <Header
          info={info}
        />
        <div className='Main-content'>
          <Sidebar
            tags={tags}
            onPageSelect={this.handlePageSelect}
          />
          <Content
            selectedPage={selectedPage}
            units={units}
            items={items}
            inventory={inventory}
            selectedFlashcardIndex={selectedFlashcardIndex}
            updateUnitState={this.addUnit}
            onClickPreviousFlashcard={this.handleClickPreviousFlashcard}
            onClickNextFlashcard={this.handleClickNextFlashcard}
            onClickEdit={this.handleEditFlashcard}
            onClickDelete={this.handleDeleteFlashcard}
          />
        </div>
      </div>
    );
  }

  fetchUnits() {
    utils.fetchUnits({ token: this.props.token })
      .then(units => {
        this.setState({ units })
      });
  }

  addUnit(unit, response) {
    this.setState(prevState => {
      const { units } = prevState;
      unit.id = response && response.id;
      const newUnits = units.concat(unit);
      return { units: newUnits };
    });
  }

  fetchItems() {
    utils.fetchItems({ token: this.props.token })
      .then(items => {
        this.setState({ items })
      });
  }

  fetchInventory() {
    utils.fetchInventory({ token: this.props.token })
      .then(inventory => {
        this.setState({ inventory })
      });
  }

  createFlashcard(flashcard) {
    utils.createFlashcard({ token: this.props.token, flashcard })
      .then(flashcard => {
        this.setState(actions.createFlashcard.bind(null, flashcard));
      });
  }

  updateFlashcard(flashcard) {
    utils.updateFlashcard({ token: this.props.token, flashcard })
      .then(flashcard => {
        this.setState(actions.updateFlashcard.bind(null, flashcard));
      });
  }

  deleteFlashcard(flashcard) {
    utils.deleteFlashcard({ token: this.props.token, flashcard })
      .then(() => {
        this.setState(actions.deleteFlashcard.bind(null, flashcard));
      });
  }


}

export default Main;
