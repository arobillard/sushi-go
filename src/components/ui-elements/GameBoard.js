import React from 'react';
import { cards } from '../../cardData';
import CardSushiFull from './CardSushiFull';
import CardSushiSm from './CardSushiSm';
import RoundEnd from './RoundEnd';

class GameBoard extends React.Component {

  state ={
    handVisible: true,
  }

  teaRef = React.createRef();

  componentDidMount() {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (this.props.settingsDisplayed) {
          this.props.handleSettingsDisplay();
        } else {
          this.handleHandVisibility();
        }
      }
    })
  }

  userPlayCard = (card) => {
    this.props.playCard(card)
  }

  showHand = () => {
    const localUser = this.props.localUser;
    const users = {...this.props.users};
    const hands = this.props.hands;
    const handRef = users[localUser].handRef;
    const hand = hands[handRef];
    const handFamilies = [];
    const handDisplay = [];
    const handLocked = users[localUser].playedCards ? users[localUser].playedCards.ready : false;
    if (hand) {
      hand.forEach(key => {
        if (!handFamilies.includes(cards[key].family)) {
          handFamilies.push(cards[key].family)
        }
      })
    }
    let cardCounter = 1;
    handFamilies.forEach(family => {
      hand.forEach(card => {
        if (cards[card].family === family) {
          const cardData = cards[card];
          handDisplay.push(
            <CardSushiFull
              key={`card-${cardCounter}-${card}`}
              index={card}
              img={card}
              cardData={cardData}
              users={users}
              userPlayCard={this.userPlayCard}
              showConfirm={true}
              revealed={true}
            />
          )
          cardCounter++;
        }
      })
    })
    return (
      <aside className={`hand bg-${this.props.users[this.props.localUser].color}-faded${this.state.handVisible ? ' open' : ''}${handLocked ? ' locked' : ''}`}>
        <button onClick={this.handleHandVisibility} className={`hand-title bg-${this.props.users[this.props.localUser].color}`} tabIndex="0">
          <div className="hand-title-rotate">
            <h2>Your Hand</h2>
          </div>
          <span className="headline-3">{this.state.handVisible ? 'X' : '<'}</span>
        </button>
        <div className="hand-cards island">
          {handDisplay}
        </div>
      </aside>
    )
  }

  handleHandVisibility = () => {
    if (this.state.handVisible) {
      this.setState({ handVisible: false })
    } else {
      this.setState({ handVisible: true })
    }
  }

  myPlayedCards = () => {
    const localUser = this.props.localUser;
    const users = { ...this.props.users };
    const hand = users[localUser].playedCards ? users[localUser].playedCards.cards : [];
    const handFamilies = [];
    const handDisplay = [];
    if (hand) {
      hand.forEach(card => {
        if (!handFamilies.includes(cards[card.card].family)) {
          if (cards[card.card].family === 'wasabi' && !handFamilies.includes('nigiri')) {
            handFamilies.push('nigiri')
          } else {
            handFamilies.push(cards[card.card].family)
          }
        }
      })
    }
    let cardCounter = 1;
    const largestFam = {
      family: null,
      length: 0,
    };
    handFamilies.forEach(family => {
      let makiCount = 0;
      if (family !== 'ice-cream' && family !== 'wasabi' && family !== 'tea') {
        const famCards = [];
        hand.forEach(card => {
          const cardData = cards[card.card];
          if (family === 'maki' && cardData.family === 'maki') {
            makiCount = makiCount + cardData.value;
          }
          if (cardData.family === family) {
            famCards.push(
              <CardSushiFull
                key={`${family}-${cardCounter}-${card.card}`}
                index={card.card}
                img={card.card}
                cardData={cardData}
                users={users}
                userPlayCard={this.userPlayCard}
                showConfirm={false}
                cancelled={card.cancelled}
                wasabiApplied={card.wasabiApplied}
                revealed={card.revealed}
              />
            )
            cardCounter++;
          }
        })
        if (family === 'maki') {
          famCards.push(
            <div key={`my-maki-count`} className="maki-count">
              <span>{makiCount}</span>
            </div>
          )
        }
        hand.forEach(card => {
          const cardData = cards[card.card];
          if (cardData['family'] === 'wasabi' && family === 'nigiri') {
            famCards.push(
              <CardSushiFull
                key={`${family}-${cardCounter}-${card.card}`}
                index={card.card}
                img={card.card}
                cardData={cardData}
                users={users}
                userPlayCard={this.userPlayCard}
                showConfirm={false}
                cancelled={card.cancelled}
                revealed={card.revealed}
              />
            )
            cardCounter++;
          }
        })
        if (famCards.length > largestFam.length) {
          largestFam.length = famCards.length;
          largestFam.family = family;
        }
        handDisplay.push(
          <div key={family} className={`sushi-family ${family}`}>
            {famCards}
          </div>
        )
      }
    })
    handDisplay.forEach(family => {
      if (family.key === largestFam.family && family.key !== 'tea') {
        hand.forEach(card => {
          const cardData = cards[card.card];
          if (cardData.family === 'tea') {
            family.props.children.push(
              <CardSushiFull
                ref={this.teaRef}
                key={`tea-${cardCounter}-${card.card}`}
                index={card.card}
                img={card.card}
                cardData={cardData}
                users={users}
                userPlayCard={this.userPlayCard}
                showConfirm={false}
                revealed={card.revealed}
              />
            )
            cardCounter++;
          }
        })
      }
    })
    if (largestFam.length === 0) {
      const teaCards = [];
      if (hand) {
        hand.forEach(card => {
          const cardData = cards[card.card];
          if (cardData.family === 'tea') {
            teaCards.push(
              <CardSushiFull
                key={`tea-${cardCounter}-${card.card}`}
                index={card.card}
                img={card.card}
                cardData={cardData}
                users={users}
                userPlayCard={this.userPlayCard}
                showConfirm={false}
                revealed={card.revealed}
              />
            )
            cardCounter++;
          }
        })
      }
      handDisplay.push(
        <div key="tea" className={`sushi-family tea`}>
          {teaCards}
        </div>
      )
    }
    return (
      <div className="sushi-layout">
        {handDisplay}
      </div>
    )
  }

  displayDessert = () => {
    const localUser = this.props.localUser;
    const users = { ...this.props.users };
    const hand = users[localUser].playedCards ? users[localUser].playedCards.cards : false;
    const handDisplay = [];
    let cardCounter = 1;
    if (hand) {
      hand.forEach(card => {
        const cardData = cards[card.card];
        if (cardData.family === 'ice-cream') {
          handDisplay.push(
            <CardSushiFull
              key={`ice-cream-${cardCounter}`}
              index={card.card}
              img={card.card}
              cardData={cardData}
              users={users}
              userPlayCard={this.userPlayCard}
              showConfirm={false}
              revealed={card.revealed}
            />
          )
          cardCounter++;
        }
      })
    }
    return handDisplay;
  }

  displayPlayerPlayedCards = () => {
    const localUser = this.props.localUser;
    const users = { ...this.props.users };
    const userKeys = Object.keys(users);
    const userColumns = [];
    userKeys.forEach(user => {
      if (user !== localUser) {
        const hand = users[user].playedCards ? users[user].playedCards.cards : false;
        const handFamilies = [];
        const handDisplay = [];
        if (hand) {
          hand.forEach(card => {
            if (!handFamilies.includes(cards[card.card].family)) {
              if (cards[card.card].family === 'wasabi' && !handFamilies.includes('nigiri')) {
                handFamilies.push('nigiri')
              } else {
                handFamilies.push(cards[card.card].family)
              }
            }
          })
        }
        let cardCounter = 1;
        const largestFam = {
          family: null,
          length: 0,
        };
        handFamilies.forEach(family => {
          let makiCount = 0;
          if (family !== 'ice-cream' && family !== 'wasabi' && family !== 'tea') {
            const famCards = [];
            hand.forEach(card => {
              const cardData = cards[card.card];
              if (family === 'maki' && cardData.family === 'maki' && card.revealed === true) {
                makiCount = makiCount + cardData.value;
              }
              if (cardData.family === family) {
                famCards.push(
                  <CardSushiSm
                    key={`${user}-${card.card}-${cardCounter}`}
                    cardData={cards[card.card]}
                    img={card.card}
                    cancelled={card.cancelled}
                    wasabiApplied={card.wasabiApplied}
                    revealed={card.revealed}
                  />
                )
                cardCounter++;
              }
            })
            if (family === 'maki') {
              if (makiCount !== 0) {
                famCards.push(
                  <div key={`${user}-maki-count`} className="maki-count">
                    <span>{makiCount}</span>
                  </div>
                )
              }
            }
            hand.forEach(card => {
              const cardData = cards[card.card];
              if (cardData['family'] === 'wasabi' && family === 'nigiri') {
                famCards.push(
                  <CardSushiSm
                    key={`${user}-${card.card}-${cardCounter}`}
                    cardData={cards[card.card]}
                    img={card.card}
                    revealed={card.revealed}
                  />
                )
                cardCounter++;
              }
            })
            if (famCards.length > largestFam.length) {
              largestFam.length = famCards.length;
              largestFam.family = family;
            }
            handDisplay.push(
              <div key={family} className={`sushi-family ${family}`}>
                {famCards}
              </div>
            )
          }
        })
        handDisplay.forEach(family => {
          if (family.key === largestFam.family && family.key !== 'tea') {
            hand.forEach(card => {
              const cardData = cards[card.card];
              if (cardData.family === 'tea') {
                family.props.children.push(
                  <CardSushiSm
                    key={`${user}-${card.card}-${cardCounter}`}
                    cardData={cards[card.card]}
                    img={card.card}
                    revealed={card.revealed}
                  />
                )
                cardCounter++;
              }
            })
          }
        })
        if (largestFam.length === 0) {
          const teaCards = [];
          if (hand) {
            hand.forEach(card => {
              const cardData = cards[card.card];
              if (cardData.family === 'tea') {
                teaCards.push(
                  <CardSushiSm
                    key={`${user}-${card.card}-${cardCounter}`}
                    cardData={cards[card.card]}
                    img={card.card}
                    revealed={card.revealed}
                  />
                )
                cardCounter++;
              }
            })
          }
          handDisplay.push(
            <div key="tea" className={`sushi-family tea`}>
              {teaCards}
            </div>
          )
        }

        cardCounter = 1;
        const dessertDisplay = []
        if (hand) {   
          hand.forEach(card => {
            const cardData = cards[card.card];
            if (cardData.family === 'ice-cream') {
              dessertDisplay.push(
                <CardSushiSm
                  key={`${user}-${card.card}-${cardCounter}`}
                  cardData={cards[card.card]}
                  img={card.card}
                  revealed={card.revealed}
                />
              )
              cardCounter++;
            }
          })
        }   
        const userReady = users[user].playedCards ? users[user].playedCards.ready : false;
        userColumns.push (
          <div key={user} className={`card-column bg-${users[user].color}-faded`}>
            <div className={`panel-score bg-${users[user].color}${userReady ? ' ready' : ''}`}>
              <h2>{user}:</h2>
              <strong className="score">{users[user].score ? users[user].score : 0}</strong>
            </div>
            <div className="panel-cards">
              {handDisplay}
            </div>
            <div className={`panel-dessert bg-${users[user].color === 'pink' ? 'purple' : 'pink'}`}>
              {dessertDisplay}
            </div>
          </div>
        )
      }
    });
    return userColumns;
  }

  handleReady = () => {
    const localUser = this.props.localUser;
    this.props.setReady(localUser);
  }

  render() {
    const localUser = this.props.localUser;
    const users = this.props.users;
    const ready = users[localUser].playedCards ? users[localUser].playedCards.ready : false;
    return (
      <>
        <div className={`card-panels wrapper gutter-1-2${ this.props.roundEnd === true ? ' opacity-1-4' : ''}`}>
        <section className="local-user-cards gutter-1-2">
          <div className={`panel-wrap bg-${users[localUser].color}-faded`}>
            <div className={`panel-score bg-${users[localUser].color}`}>
              <strong className="score">{this.props.users[localUser].score ? this.props.users[localUser].score : 0}</strong>
              <button className={`btn-ready${ready ? ' ready' : ''}`} onClick={this.handleReady}>Ready{ready ? '!' : ''}</button>
              {users[localUser].host ? <span className="host-badge bg-pink">H</span> : null}
            </div>
            <div className="panel-cards">
              <h2>Your Sushi</h2>
              {this.myPlayedCards()}
            </div>
              <div className={`panel-dessert bg-${users[localUser].color === 'pink' ? 'purple' : 'pink'}`}>
              <h3>Dessert</h3>
              <div className="dessert-cards">
                {this.displayDessert()}
              </div>
            </div>
          </div>
        </section>
        <section className="user-cards gutter-1-2 push">
          {this.displayPlayerPlayedCards()}
        </section>
      </div>
      {this.showHand()}
      {this.props.roundEnd === true ? <RoundEnd
        users={this.props.users}
        localUser={this.props.localUser}
        newRound={this.props.newRound}
        startNewRound={this.props.startNewRound}
        calculateScore={this.props.calculateScore}
        round={this.props.round}
        exitToLobby={this.props.exitToLobby}
        startGame={this.props.startGame}
      /> : null}
      </>
    )
  }

}

export default GameBoard;