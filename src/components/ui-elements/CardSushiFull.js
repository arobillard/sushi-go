import React from 'react';

class CardSushiFull extends React.Component {

  state = {
    confirm: false,
  }

  handlePlayCard = (e) => {
    if (!this.state.confirm) {
      this.setState({ confirm: true })
    }
  }

  askConfirm = () => {
    if (this.state.confirm) {
      return (
        <div className="card-confirm">
          <button className="btn push" onClick={this.confirmCard}>Confirm</button>
          <button className="btn btn-pink" onClick={this.cancelCard}>Cancel</button>
        </div>
      )
    }
  }

  confirmCard = (e) => {
    const card = e.currentTarget.closest('.card-sushi').dataset.card; 
    this.props.userPlayCard(card);
  }
  
  cancelCard = (e) => {
    this.setState({ confirm: false })
  }

  displayMakiIcons = () => {
    const cardData = this.props.cardData;
    const makiIcons = []
    let i = 0;
    while (i < cardData.value) {
      makiIcons.push(
        <li key={`maki-${i + 1}`}>
          <img className="maki-icon" src="images/maki.svg" alt="Maki" />
        </li>
      )
      i++;
    }
    return makiIcons;
  }

  render() {
    const cardData = this.props.cardData;
    const userCount = Object.keys(this.props.users).length;
    if (cardData.family === 'maki') {
      return (
        <div onClick={this.props.showConfirm ? this.handlePlayCard : null} data-card={this.props.index} className={`card-sushi maki${this.props.revealed ? '' : ' not-revealed'}`}>
          <ul className="card-maki-icons list-group-flex push-0">
            {this.displayMakiIcons()}
          </ul>
          <div className="card-image">
            <img src={`images/maki.svg`} alt="" />
          </div>
          <div className="card-info">
            <h3 className="card-title">{cardData.title}</h3>
            <h4 className="card-score-desc">{userCount < 6 ? cardData.scoreDescS : cardData.scoreDescL}</h4>
          </div>
          {this.askConfirm()}
        </div>
      )
    } else {
      return (
        <div onClick={this.props.showConfirm ? this.handlePlayCard : null} data-card={this.props.index} className={`card-sushi${cardData.family ? ` ${cardData.family}` : ''}${this.props.wasabiApplied ? ` wasabi-applied` : ''}${this.props.cancelled ? ' miso-cancelled' : ''}${this.props.revealed ? '' : ' not-revealed'}`}>
          <div className="card-image">
            <img src={`images/${this.props.img}.svg`} alt="" />
          </div>
          <div className="card-info">
            <h3 className="card-title">{cardData.title}</h3>
            <h4 className="card-score-desc">{cardData.scoreDesc}</h4>
          </div>
          {this.askConfirm()}
        </div>
      )
    }
  }

}

export default CardSushiFull;