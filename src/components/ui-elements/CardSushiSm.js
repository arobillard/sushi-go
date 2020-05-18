import React from 'react';

class CardSushiSm extends React.Component {



  render() {
    const cardData = this.props.cardData;
    if (cardData.family === 'maki' || cardData.family === 'nigiri') {
      return (
        <div className={`card-sushi ${cardData.title === 'Wasabi' ? 'wasabi' : cardData.family}${this.props.wasabiApplied ? ' wasabi-applied' : ''}${this.props.revealed ? '' : ' not-revealed'}`}>
          <div className="card-img-wrap">
            <span className="card-points">{cardData.value}</span>
            <img src={`images/${cardData.family === 'maki' ? 'maki' : this.props.img}.svg`} alt={cardData.title} />
          </div>
        </div>
      )
    } else {
      return (
        <div className={`card-sushi ${cardData.family}${this.props.cancelled ? ' miso-cancelled' : ''}${this.props.revealed ? '' : ' not-revealed'}`}>
          <div className="card-img-wrap">
            <img src={`images/${this.props.img}.svg`} alt={cardData.title} />
          </div>
        </div>
      )
    }
  }

}

export default CardSushiSm;