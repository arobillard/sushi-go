import React from 'react';
import { cards } from '../../cardData';

class GameBoard extends React.Component {

  state ={
    users: {
      Adam: {
        userName: "Adam",
        color: "purple",
        cards: ['nigiri-salmon', 'nigiri-salmon', 'nigiri-squid', 'maki-3', 'maki-2', 'tempura', 'tempura', 'sashimi', 'miso-soup', 'ice-cream']
      },
      Hannah: {
        userName: "Hannah",
        color: "green"
      },
      Patti: {
        userName: "Patti",
        color: "turquoise"
      },
      Hugh: {
        userName: "Hugh",
        color: "yellow"
      },
      Tim: {
        userName: "Tim",
        color: "cyan"
      },
      Caitlin: {
        userName: "Caitlin",
        color: "navy"
      },
      Andrew: {
        userName: "Andrew",
        color: "pink"
      },
      Kyla: {
        userName: "Kyla",
        color: "red"
      },
    }
  }

  displayLocalUserCards = () => {
    const localUser = this.state.users[this.props.localUser];
    // get card information
    const playedCards = {
      "nigiri": {},
      "maki": {},
      "tempura": {},
      "sashimi": {},
      "miso-soup": {},
      "tea": {},
      "wasabi": {},
      "ice-cream": {},
    };
    localUser.cards.forEach(key => {
      const cardfamily = {...playedCards[cards[key].family]}
      cardfamily[key] = cards[key];
      playedCards[cards[key].family] = cardfamily;
    })
    // create list of cards in each card family
    const cardFamilies = {
      "nigiri": {},
      "maki": {},
      "tempura": {},
      "sashimi": {},
      "miso-soup": {},
      "tea": {},
    };
    console.log(playedCards)
    // display each family of card
    return (
      <div className="sushi-layout">
        {Object.keys(playedCards).map(family => {
          if (family !== 'ice-cream' && family !== 'wasabi') {
            return (
              <div key={family} className={`sushi-family ${family}`}>
                {Object.keys(playedCards[family]).map(sushi => {
                  if (family === 'maki') {
                    return (
                      <div key={sushi} className="card-sushi">
                        <div className="card-image">
                          <img src="https://placehold.it/50x50" alt="" />
                        </div>
                        <div className="card-info">
                          <h3 className="card-title">{playedCards[family][sushi].title}</h3>
                          <h4 className="card-score-desc">{playedCards[family][sushi].scoreDescL}</h4>
                        </div>
                      </div>
                    )
                  } else {
                    return (
                      <div key={sushi} className={`card-sushi${playedCards[family][sushi].wasabi ? ' wasabi-applied' : ''}${playedCards[family][sushi].cancelled ? ' miso-cancelled' : ''}`}>
                        <div className="card-image">
                          <img src="https://placehold.it/50x50" alt="" />
                        </div>
                        <div className="card-info">
                          <h3 className="card-title">{playedCards[family][sushi].title}</h3>
                          <h4 className="card-score-desc">{playedCards[family][sushi].scoreDesc}</h4>
                        </div>
                      </div>
                    )
                  }
                })}
              </div>
            )
          }
        })}
      </div>
    )
  }

  render() {
    return (
      <>
      <div className="card-panels wrapper gutter-1-2">
        <section className="local-user-cards gutter-1-2">
          <div className="panel-wrap bg-purple-faded">
            <div className="panel-score bg-purple">
              <strong className="score">0</strong>
              <span className="host-badge bg-pink">H</span>
            </div>
            <div className="panel-cards">
              <h2>Your Sushi</h2>
              {/* {this.displayLocalUserCards()} */}
            </div>
            <div className="panel-dessert bg-pink">
              <h3>Dessert</h3>
              
            </div>
          </div>
        </section>
        <section className="user-cards gutter-1-2 push">
          <div className="card-column bg-green-faded">
            <div className="panel-score bg-green">
              <h2>Hannah:</h2>
              <strong className="score">0</strong>
            </div>
            <div className="panel-cards">
              
            </div>
            <div className="panel-dessert bg-pink">
              
            </div>
          </div>
        </section>
      </div>

      </>
    )
  }

}

export default GameBoard;