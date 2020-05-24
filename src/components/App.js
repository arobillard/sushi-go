import React from 'react';
import base from '../base';
import Header from './ui-elements/Header'
import Footer from './ui-elements/Footer'
import { deck, cards } from '../cardData'
import Lobby from './ui-elements/Lobby';
import GameBoard from './ui-elements/GameBoard';
import Settings from './ui-elements/Settings';

class App extends React.Component {

  state = {
    deck: {},
    users: {
      "Adam": {
        "color": "purple",
        "handRef": 0,
        "host": true,
        "playedCards": {
          "cards": [
            {
              "scored": false,
              "card": "tempura",
              "revealed": true
            },
            {
              "scored": false,
              "card": "tempura",
              "revealed": true
            },
            {
              "scored": false,
              "card": "maki-3",
              "revealed": true
            },
            {
              "scored": false,
              "card": "tea",
              "revealed": true
            },
            {
              "scored": false,
              "card": "maki-1",
              "revealed": true
            },
            {
              "cancelled": true,
              "scored": false,
              "card": "miso-soup",
              "revealed": true
            }
          ],
          "ready": false
        },
        "userName": "Adam"
      },
      "Fox": {
        "color": "cyan",
        "handRef": 0,
        "playedCards": {
          "cards": [
            {
              "scored": false,
              "card": "wasabi",
              "revealed": true
            },
            {
              "scored": false,
              "card": "squid",
              "revealed": true,
              "wasabiApplied": true
            },
            {
              "scored": false,
              "card": "tea",
              "revealed": true
            },
            {
              "scored": false,
              "card": "egg",
              "revealed": true
            },
            {
              "scored": false,
              "card": "salmon",
              "revealed": true
            },
            {
              "scored": false,
              "card": "salmon",
              "revealed": true
            },
            {
              "cancelled": false,
              "scored": false,
              "card": "miso-soup",
              "revealed": true
            }
          ],
          "ready": true,
          "wasabiWaiting": false
        },
        "userName": "Fox"
      },
      "Iroh": {
        "color": "green",
        "handRef": 1,
        "playedCards": {
          "cards": [
            {
              "scored": false,
              "card": "sashimi",
              "revealed": true
            },
            {
              "scored": false,
              "card": "squid",
              "revealed": true
            },
            {
              "scored": false,
              "card": "maki-3",
              "revealed": true
            },
            {
              "scored": false,
              "card": "sashimi",
              "revealed": true
            },
            {
              "scored": false,
              "card": "maki-1",
              "revealed": true
            },
            {
              "scored": false,
              "card": "sashimi",
              "revealed": true
            },
            {
              "cancelled": true,
              "scored": false,
              "card": "miso-soup",
              "revealed": true
            }
          ],
          "ready": true
        },
        "userName": "Iroh"
      },
      "Opera": {
        "color": "pink",
        "handRef": 2,
        "playedCards": {
          "cards": [
            {
              "scored": false,
              "card": "wasabi",
              "revealed": true
            },
            {
              "scored": false,
              "card": "maki-3",
              "revealed": true
            },
            {
              "scored": false,
              "card": "maki-1",
              "revealed": true
            },
            {
              "scored": false,
              "card": "ice-cream",
              "revealed": true
            },
            {
              "cancelled": true,
              "scored": false,
              "card": "miso-soup",
              "revealed": true
            },
            {
              "scored": false,
              "card": "maki-1",
              "revealed": true
            },
            {
              "scored": false,
              "card": "sashimi",
              "revealed": true
            }
          ],
          "ready": true,
          "wasabiWaiting": true
        },
        "userName": "Opera"
      },
      "Safari": {
        "color": "turquoise",
        "handRef": 3,
        "playedCards": {
          "cards": [
            {
              "scored": false,
              "card": "ice-cream",
              "revealed": true
            },
            {
              "cancelled": false,
              "scored": false,
              "card": "miso-soup",
              "revealed": true
            },
            {
              "scored": false,
              "card": "salmon",
              "revealed": true
            },
            {
              "scored": false,
              "card": "ice-cream",
              "revealed": true
            },
            {
              "scored": false,
              "card": "egg",
              "revealed": true
            },
            {
              "scored": false,
              "card": "sashimi",
              "revealed": true
            },
            {
              "scored": false,
              "card": "sashimi",
              "revealed": true
            }
          ],
          "ready": true
        },
        "userName": "Safari"
      },
      "Safe-Fox": {
        "color": "navy",
        "handRef": 4,
        "playedCards": {
          "cards": [
            {
              "scored": false,
              "card": "wasabi",
              "revealed": true
            },
            {
              "scored": false,
              "card": "squid",
              "revealed": true,
              "wasabiApplied": true
            },
            {
              "scored": false,
              "card": "ice-cream",
              "revealed": true
            },
            {
              "cancelled": false,
              "scored": false,
              "card": "miso-soup",
              "revealed": true
            },
            {
              "cancelled": false,
              "scored": false,
              "card": "miso-soup",
              "revealed": true
            },
            {
              "scored": false,
              "card": "egg",
              "revealed": true
            },
            {
              "scored": false,
              "card": "salmon",
              "revealed": true
            }
          ],
          "ready": true,
          "wasabiWaiting": false
        },
        "userName": "Safe-Fox"
      },
      "Safe-Saf": {
        "color": "yellow",
        "handRef": 5,
        "playedCards": {
          "cards": [
            {
              "scored": false,
              "card": "tempura",
              "revealed": true
            },
            {
              "scored": false,
              "card": "maki-2",
              "revealed": true
            },
            {
              "scored": false,
              "card": "ice-cream",
              "revealed": true
            },
            {
              "scored": false,
              "card": "maki-2",
              "revealed": true
            },
            {
              "scored": false,
              "card": "maki-2",
              "revealed": true
            },
            {
              "scored": false,
              "card": "tempura",
              "revealed": true
            },
            {
              "scored": false,
              "card": "sashimi",
              "revealed": true
            }
          ],
          "ready": true
        },
        "userName": "Safe-Saf"
      },
      "Safe-op": {
        "color": "red",
        "handRef": 6,
        "playedCards": {
          "cards": [
            {
              "scored": false,
              "card": "ice-cream",
              "revealed": true
            },
            {
              "scored": false,
              "card": "tempura",
              "revealed": true
            },
            {
              "scored": false,
              "card": "tea",
              "revealed": true
            },
            {
              "scored": false,
              "card": "tempura",
              "revealed": true
            },
            {
              "scored": false,
              "card": "tempura",
              "revealed": true
            },
            {
              "cancelled": false,
              "scored": false,
              "card": "miso-soup",
              "revealed": true
            },
            {
              "scored": false,
              "card": "ice-cream",
              "revealed": true
            }
          ],
          "ready": true
        },
        "userName": "Safe-op"
      }
    },
    localUser: '',
    gameStart: {},
    round: {},
    roundEnd: false,
    hands: {},
    settingsDisplayed: false,
    misoPlayed: false,
    roundScoreCalculated: false,
  }

  componentDidMount() {
    const localStorageRef = localStorage.getItem(this.props.match.params.gamecode); //first reinstate localstorage
    if (localStorageRef) {
      const savedState = JSON.parse(localStorageRef);
      this.setState({
        deck: savedState.deck,
        users: savedState.users,
        gameStart: savedState.gameStart,
        round: savedState.round,
        hands: savedState.hands,
      })
      this.ref = base.syncState(`sushi-go/${this.props.match.params.gamecode}/deck`, {
        context: this,
        state: 'deck'
      });
      // this.ref = base.syncState(`sushi-go/${this.props.match.params.gamecode}/users`, {
      //   context: this,
      //   state: 'users'
      // });
      this.ref = base.syncState(`sushi-go/${this.props.match.params.gamecode}/gameStart`, {
        context: this,
        state: 'gameStart'
      });
      this.ref = base.syncState(`sushi-go/${this.props.match.params.gamecode}/round`, {
        context: this,
        state: 'round'
      });
      this.ref = base.syncState(`sushi-go/${this.props.match.params.gamecode}/roundEnd`, {
        context: this,
        state: 'roundEnd'
      });
      this.ref = base.syncState(`sushi-go/${this.props.match.params.gamecode}/hands`, {
        context: this,
        state: 'hands'
      });
      this.ref = base.syncState(`sushi-go/${this.props.match.params.gamecode}/misoPlayed`, {
        context: this,
        state: 'misoPlayed'
      });
      this.ref = base.syncState(`sushi-go/${this.props.match.params.gamecode}/roundScoreCalculated`, {
        context: this,
        state: 'roundScoreCalculated'
      });
    } else {
      this.ref = base.syncState(`sushi-go/${this.props.match.params.gamecode}/deck`, {
        context: this,
        state: 'deck'
      });
      // this.ref = base.syncState(`sushi-go/${this.props.match.params.gamecode}/users`, {
      //   context: this,
      //   state: 'users'
      // });
      this.ref = base.syncState(`sushi-go/${this.props.match.params.gamecode}/gameStart`, {
        context: this,
        state: 'gameStart'
      });
      this.ref = base.syncState(`sushi-go/${this.props.match.params.gamecode}/round`, {
        context: this,
        state: 'round'
      });
      this.ref = base.syncState(`sushi-go/${this.props.match.params.gamecode}/roundEnd`, {
        context: this,
        state: 'roundEnd'
      });
      this.ref = base.syncState(`sushi-go/${this.props.match.params.gamecode}/hands`, {
        context: this,
        state: 'hands'
      });
      this.ref = base.syncState(`sushi-go/${this.props.match.params.gamecode}/misoPlayed`, {
        context: this,
        state: 'misoPlayed'
      });
      this.ref = base.syncState(`sushi-go/${this.props.match.params.gamecode}/roundScoreCalculated`, {
        context: this,
        state: 'roundScoreCalculated'
      });
      // console.log(this.state.gameStart)
      // if (this.state.gameStart === {}) {
      //   console.log('dumb gamestart')
      // }
    }
    const localUser = JSON.parse(localStorage.getItem('localUser'));
    this.setState({ localUser })
  }

  componentDidUpdate() {
    localStorage.setItem(this.props.match.params.gamecode, JSON.stringify(this.state))
    localStorage.setItem('localUser', JSON.stringify(this.state.localUser))
  }

  addUser = (newUser) => {
    const userAmount = Object.keys(this.state.users).length;
    const users = {...this.state.users};
    if (userAmount === 0) {
      newUser.host = true;
      users[newUser.userName] = newUser;
      this.setState({
        users: users,
        localUser: newUser.userName,
      });
    } else {
      users[newUser.userName] = newUser;
      this.setState({
        users: users,
        localUser: newUser.userName,
      });
    }
  }

  deleteUser = (user) => {
    const users = {...this.state.users};
    if (users[user].host === true) {
      users[user] = null;
      const userKeys = Object.keys(users);
      if (users[userKeys[1]] !== undefined) {
        if (users[userKeys[0]] === null) {
          users[userKeys[1]].host = true;
        } else {
          users[userKeys[0]].host = true;
        }
      }
      this.setState({ users })
    } else {
      users[user] = null;
      this.setState({ users })
    }
  }

  startGame = () => {
    const userCount = Object.keys(this.state.users).length;
    const fullDeck = deck();
    this.newRound(userCount, fullDeck, true);
    this.setState({
      gameStart: true
     });
  }

  startNewRound = () => {
    const userCount = Object.keys(this.state.users).length;
    const iceCreamLayOver = [];
    const deckReset = deck();
    this.state.deck.forEach(card => {
      if (card === "ice-cream") {
        iceCreamLayOver.push(card);
      }
    })
    const fullDeck = [
      ...deckReset,
      ...iceCreamLayOver
    ];
    console.log(iceCreamLayOver);
    console.log(deckReset);
    console.log(fullDeck);
    this.newRound(userCount, fullDeck, false);
    this.setState({ 
      roundEnd: false,
      roundScoreCalculated: false,
    })
  }

  newRound = (userCount, fullDeck, newGame) => {
    const newFullDeck = [...fullDeck];
    let i = 0;
    let round;
    if (newGame) {
      round = 1;
      this.setState({ round })
    } else {
      round = this.state.round + 1;
      this.setState({ round })
    }
    if (round === 1) {
      while (i < (userCount < 6 ? 5 : 7)) {
        newFullDeck.push('ice-cream');
        i++;
      }
    } else if (round === 2) {
      while (i < (userCount < 6 ? 3 : 5)) {
        newFullDeck.push('ice-cream');
        i++;
      }
    } else if (round === 3) {
      while (i < (userCount < 6 ? 2 : 3)) {
        newFullDeck.push('ice-cream');
        i++;
      }
    } else {
    }
    // this.setState({ deck: newFullDeck })
    setTimeout(() => { this.dealCards(newFullDeck) }, 1);
  }

  dealCards = (newFullDeck) => {
    const deck = [...newFullDeck];
    const hands = [];
    const userKeys = Object.keys(this.state.users);
    const userCount = userKeys.length;
    const users = {...this.state.users};
    let handSize;
    let hCounter = 0;
    let dCounter = 0;
    if (userCount < 4) {
      handSize = 10;
    } else if (userCount < 6) {
      handSize = 9;
    } else if (userCount < 8) {
      handSize = 8;
    } else {
      handSize = 7;
    }
    while (hCounter < handSize) {
      for (let h = 0; h < userCount; h++) {
        const cardNumber = Math.floor(Math.random() * deck.length);
        const card = deck[cardNumber]
        if (hands[h] === undefined) {
          hands[h] = [];
          hands[h].push(card);
        } else {
          hands[h].push(card);
        }
        deck.splice(cardNumber, 1);
      }
      hCounter++;
    }
    while (dCounter < userCount) {
      users[userKeys[dCounter]].handRef = dCounter;
      if (users[userKeys[dCounter]].playedCards && users[userKeys[dCounter]].playedCards.cards.length > 1) {
        const keepDesserts = [];
        users[userKeys[dCounter]].playedCards.cards.forEach((card, index) => {
          if (card.card === 'ice-cream') {
            keepDesserts.push({card: 'ice-cream', revealed: true});
          }
        })
        users[userKeys[dCounter]].playedCards = {
          cards: [...keepDesserts],
          ready: false,
          wasabiWaiting: false,
          doubleWasabiWaiting: false,
          tripleWasabiWaiting: false,
        }
      } else {
        users[userKeys[dCounter]].playedCards = {
          cards: [],
          ready: false,
          wasabiWaiting: false,
          doubleWasabiWaiting: false,
          tripleWasabiWaiting: false,
        }
      }
      dCounter++;
    }
    this.setState({ deck, hands, users });
  }

  playCard = (card) => {
    const localUser = this.state.localUser;
    const users = {...this.state.users};
    const userKeys = Object.keys(users);
    const hands = {...this.state.hands};
    // Add to users played cards
    if (!users[localUser].playedCards.cards) {
      users[localUser].playedCards.cards = [];
    }
    // const playedAmount = Object.keys(users[localUser].playedCards.cards).length;
    if ((card === 'egg' || card === 'squid' || card === 'salmon') && users[localUser].playedCards.wasabiWaiting) {
      users[localUser].playedCards.cards.push({
        card: card,
        scored: false,
        revealed: false,
        wasabiApplied: true
      })
      if (users[localUser].playedCards.tripleWasabiWaiting) {
        users[localUser].playedCards.tripleWasabiWaiting = false
      } else if (users[localUser].playedCards.doubleWasabiWaiting) {
        users[localUser].playedCards.doubleWasabiWaiting = false
      } else {
        users[localUser].playedCards.wasabiWaiting = false;
      }
    } else if (card === 'miso-soup') {
      if (this.state.misoPlayed === true) {
        userKeys.forEach(user => {
          let length =  0;
          let cardsCopy = [];
          if (users[user].playedCards.cards) {
            cardsCopy = [...users[user].playedCards.cards];
            length = users[user].playedCards.cards.length;
          }
          const lastCard = cardsCopy.pop();
          if (lastCard && lastCard.card === 'miso-soup' && users[user].playedCards.ready) {
            users[user].playedCards.cards[length - 1].cancelled = true;
          }
        })
        users[localUser].playedCards.cards.push({
          card: card,
          scored: false,
          revealed: false,
          cancelled: true,
        })
      } else {
        users[localUser].playedCards.cards.push({
          card: card,
          scored: false,
          revealed: false,
          cancelled: false,
        })
        this.setState({ misoPlayed: true })
      }
    } else {
      users[localUser].playedCards.cards.push({
        card: card,
        scored: false,
        revealed: false,
      })
    }
    if (card === 'wasabi') {
      if (users[localUser].playedCards.doubleWasabiWaiting) {
        users[localUser].playedCards.tripleWasabiWaiting = true
      } else if (users[localUser].playedCards.wasabiWaiting) {
        users[localUser].playedCards.doubleWasabiWaiting = true;
      }
      users[localUser].playedCards.wasabiWaiting = true;
    }
    users[localUser].playedCards.ready = true;
    this.setState({ users })
    let i = 0;
    let ready = false;
    while (i < userKeys.length) {
      if (!users[userKeys[i]].playedCards.ready) {
        i++
        ready = false;
        break;
      }
      ready = true;
      i++
    }
    if (ready) {
      if (hands[0].length > 1) {
        userKeys.forEach(user => {
          const oldHandRef = users[user].handRef;
          const lastCardRef = users[user].playedCards.cards.length - 1;
          const lastCardPlayed = users[user].playedCards.cards[lastCardRef].card;
          const newHand = [
            ...hands[oldHandRef].slice(0, hands[oldHandRef].indexOf(lastCardPlayed)),
            ...hands[oldHandRef].slice(hands[oldHandRef].indexOf(lastCardPlayed) + 1),
          ]
          hands[oldHandRef] = newHand;
        })
      }
      this.revealCards()
      this.setState({
        misoPlayed: false,
        hands: hands
      })
    }
  }

  setReady = (user) => {
    const users = {...this.state.users};
    users[user].playedCards.ready = true;
    this.setState({ users })
  }

  revealCards = () => {
    const users = { ...this.state.users };
    const userKeys = Object.keys(users);
    const hands = [...this.state.hands]
    userKeys.forEach(key => {
      const cards = users[key].playedCards.cards;
      cards.forEach(card => {
        card.revealed = true;
      })
      const handRef = users[key].handRef;
      if (handRef === userKeys.length - 1) {
        users[key].handRef = 0;
      } else {
        users[key].handRef++;
      }
      if (hands[0].length <= 1) {
        setTimeout(() => {
          if (this.state.roundScoreCalculated !== true) {
            this.calculateScore();
          }
          this.setState({ 
            roundEnd: true,
            roundScoreCalculated: true
          })
        }, 1000)
      } else {
        users[key].playedCards.ready = false;
      }
    })
    // rotate hands
    this.setState({ users })
  }

  calculateScore = () => {
    const users = { ...this.state.users }
    const userKeys = Object.keys(users);
    const userCount = userKeys.length;
    const makiCompare = {};
    const round = this.state.round;
    userKeys.forEach(user => {
      const userCards = users[user].playedCards.cards;
      let score = 0;
      let tempura = 0;
      let sashimi = 0;
      let makiScore = 0;
      let teaCount = 0;
      let desserts = 0;
      const famCount = {};
      if (users[user].score) {
        score = users[user].score;
      }
      userCards.forEach(card => {
        if (famCount[cards[card.card].family]) {
          if (cards[card.card].family === 'wasabi') {
            famCount['nigiri'] = famCount['nigiri'] + 1;
          } else {
            famCount[cards[card.card].family] = famCount[cards[card.card].family] + 1;
          }
        } else {
          if (cards[card.card].family === 'wasabi') {
            famCount['nigiri'] = 1;
          } else {
            famCount[cards[card.card].family] = 1;
          }
        }
        if (!card.scored) {
          if (cards[card.card].family === 'nigiri') {
            if (card.wasabiApplied) {
              score = score + (cards[card.card].value * 3);
            } else {
              score = score + cards[card.card].value;
            }
            card.scored = true;
          } else if (cards[card.card].family === 'miso-soup' && !card.cancelled) {
            score = score + 3;
            card.scored = true;
          } else if (card.card === 'tempura') {
            tempura++;
            card.scored = true;
          } else if (card.card === 'sashimi') {
            sashimi++;
            card.scored = true;
          } else if (cards[card.card].family === 'maki') {
            makiScore = makiScore + cards[card.card].value;
            card.scored = true;
          } else if (cards[card.card].family === 'tea') {
            teaCount = teaCount + 1;
          } else if (round === 3 && cards[card.card].family === 'ice-cream') {
            desserts = desserts + 1;
            card.scored = true;
          }
        }

      })
      if (tempura >= 2) {
        const tempuraScore = Math.floor(tempura / 2) * 5;
        score = score + tempuraScore;
      }
      if (sashimi >= 3) {
        const sashimiScore = Math.floor(sashimi / 3) * 10;
        score = score + sashimiScore;
      }
      if (makiScore > 0) {
        makiCompare[user] = makiScore;
      }
      if (teaCount > 0) {
        const famCountOrdered = Object.entries(famCount).sort(function (a, b) {
          const aPrice = a[1];
          const bPrice = b[1];
          return bPrice - aPrice;
        });
        score = score + (famCountOrdered[0][1] * teaCount);
        console.log(user, teaCount)
        console.log(user, famCountOrdered[0])
        console.log(user, famCountOrdered[0][1] * teaCount)
      }
      if (desserts >= 4) {
        const dessertScore = Math.floor(desserts / 4) * 12;
        score = score + dessertScore;
      }
      users[user].score = score;
      users[user].playedCards.cards = userCards;
    })
    if (Object.keys(makiCompare).length !== 0) {
      // const numbersSorted = numbers.sort((aItem, bItem) => aItem - bItem);
      const makiWinnerOrder = Object.entries(makiCompare).sort(function (a, b) {
        const aPrice = a[1];
        const bPrice = b[1];
        return bPrice - aPrice;
      });
      if (userCount > 6) {
        let firstPlace;
        let secondPlace;
        let thirdPlace;
        makiWinnerOrder.forEach((winner, index) => {
          if (index === 0) {
            users[winner[0]].score = users[winner[0]].score + 6;
            firstPlace = winner[1];
          } else if (index === 1) {
            if (winner[1] === firstPlace) {
              users[winner[0]].score = users[winner[0]].score + 6;
            } else {
              users[winner[0]].score = users[winner[0]].score + 4;
              secondPlace = winner[1];
            }
          } else if (index === 2) {
            if (winner[1] === firstPlace) {
              users[winner[0]].score = users[winner[0]].score + 6;
            } else if (winner[1] === secondPlace) {
              users[winner[0]].score = users[winner[0]].score + 4;
            } else {
              users[winner[0]].score = users[winner[0]].score + 2;
              thirdPlace = winner[1];
            }
          } else {
            if (!secondPlace) {
              users[winner[0]].score = users[winner[0]].score + 4;
              secondPlace = winner[1];
            } else if (!thirdPlace) {
              users[winner[0]].score = users[winner[0]].score + 2;
              thirdPlace = winner[1];
            } else if (winner[1] === firstPlace) {
              users[winner[0]].score = users[winner[0]].score + 6;
            } else if (winner[1] === secondPlace) {
              users[winner[0]].score = users[winner[0]].score + 4;
            } else if (winner[1] === thirdPlace) {
              users[winner[0]].score = users[winner[0]].score + 2;
            }
          }
        }) 
      } else {
        let firstPlace;
        let secondPlace;
        makiWinnerOrder.forEach((winner, index) => {
          if (index === 0) {
            users[winner[0]].score = users[winner[0]].score + 6;
            firstPlace = winner[1];
          } else if (index === 1) {
            if (winner[1] === firstPlace) {
              users[winner[0]].score = users[winner[0]].score + 6;
            } else {
              users[winner[0]].score = users[winner[0]].score + 3;
              secondPlace = winner[1];
            }
          } else {
            if (!secondPlace) {
              users[winner[0]].score = users[winner[0]].score + 3;
              secondPlace = winner[1];
            } else if (winner[1] === firstPlace) {
              users[winner[0]].score = users[winner[0]].score + 6;
            } else if (winner[1] === secondPlace) {
              users[winner[0]].score = users[winner[0]].score + 3;
            }
          }
        }) 
      }
    }
    this.setState({ users })
  }

  subtitleDisplay = () => {
    if (typeof this.state.gameStart === "object" || this.state.gameStart === false) {
      return 'Lobby'
    } else {
      return `Round ${this.state.round}`
    }
  }

  handleSettingsDisplay = () => {
    if (this.state.settingsDisplayed) {
      this.setState({ settingsDisplayed: false })
    } else {
      this.setState({ settingsDisplayed: true })
    }
  }

  settingsDisplay = () => {
    return (
      <Settings
        handleSettingsDisplay={this.handleSettingsDisplay}
        exitToLobby={this.exitToLobby}
        startGame={this.startGame}
      />
    )
  }

  exitToLobby = () => {
    const users = {...this.state.users}
    const userKeys = Object.keys(users);

    userKeys.forEach(user => {
      users[user].playedCards = null;
      users[user].handRef = null;
      users[user].score = null;
    })
    this.setState({
      gameStart: false,
      round: null,
      hands: null,
      deck: null,
      misoPlayed: false,
      users: users,
      roundScoreCalculated: false,
      roundEnd: false,
    })
    this.setState({ settingsDisplayed: false })
  }

  gameBoardDisplay = () => {
    const gamecode = this.props.match.params.gamecode;
    const users = Object.keys(this.state.users);
    const localUser = this.state.localUser;
    if (this.state.gameStart === true && users.includes(localUser)) {
      const userCount = Object.keys(this.state.users).length;
      return (
        <GameBoard
          users={this.state.users}
          localUser={this.state.localUser}
          deck={this.state.deck}
          hands={this.state.hands}
          userCount={userCount}
          playCard={this.playCard}
          settingsDisplayed={this.state.settingsDisplayed}
          handleSettingsDisplay={this.handleSettingsDisplay}
          roundEnd={this.state.roundEnd}
          newRound={this.newRound}
          startNewRound={this.startNewRound}
          calculateScore={this.calculateScore}
          round={this.state.round}
          exitToLobby={this.exitToLobby}
          setReady={this.setReady}
          startGame={this.startGame}
        />
      )
    } else {
      return (
        <Lobby
          gamecode={gamecode}
          users={this.state.users}
          addUser={this.addUser}
          deleteUser={this.deleteUser}
          localUser={this.state.localUser}
          startGame={this.startGame}
        />
      )
    }
  }

  render() {
    const gamecode = this.props.match.params.gamecode;
    const localUser = this.state.localUser;
    const users = {...this.state.users};
    const host = users[localUser] ? users[localUser].host : false; 
    return (
      <>
        <Header
          subtitle={this.subtitleDisplay()}
          gamecode={gamecode}
          host={host}
          handleSettingsDisplay={this.handleSettingsDisplay}
          gameStart={this.state.gameStart}
        />
        <main id="main" role="main" className={`flex pad-t-6${this.state.settingsDisplayed ? ' opacity-1-4' : ''}`}>
          {this.gameBoardDisplay()}
        </main>
        {this.state.settingsDisplayed && this.settingsDisplay()}
        <Footer />
      </>
    )
  }

}

export default App;