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
      // Adam: {
      //   userName: "Adam",
      //   color: "purple",
      //   host: true
      // },
      // Hannah: {
      //   userName: "Hannah",
      //   color: "green"
      // },
      // Patti: {
      //   userName: "Patti",
      //   color: "turquoise"
      // },
      // Hugh: {
      //   userName: "Hugh",
      //   color: "yellow"
      // },
      // Tim: {
      //   userName: "Tim",
      //   color: "cyan"
      // },
      // Caitlin: {
      //   userName: "Caitlin",
      //   color: "navy"
      // },
      // Andrew: {
      //   userName: "Andrew",
      //   color: "pink"
      // },
      // Kyla: {
      //   userName: "Kyla",
      //   color: "red"
      // },
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
      this.ref = base.syncState(`sushi-go/${this.props.match.params.gamecode}/users`, {
        context: this,
        state: 'users'
      });
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
    } else {
      this.ref = base.syncState(`sushi-go/${this.props.match.params.gamecode}/users`, {
        context: this,
        state: 'users'
      });
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
    const fullDeck = deck();
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
    const hands = {...this.state.hands};
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
      console.log('running')
      // console.log(users[userKeys[dCounter]].playedCards.cards.length)
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
        }
      } else {
        users[userKeys[dCounter]].playedCards = {
          cards: [],
          ready: false,
        }
      }
      console.log(users[userKeys[dCounter]].playedCards.cards.length)
      dCounter++;
    }
    this.setState({ deck, hands, users });
  }

  playCard = (card) => {
    const localUser = this.state.localUser;
    const users = {...this.state.users};
    const userKeys = Object.keys(users);
    const hands = {...this.state.hands};
    const handRef = users[localUser].handRef;
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
      users[localUser].playedCards.wasabiWaiting = false;
    } else if (card === 'miso-soup') {
      // const cardNum = users[localUser].playedCards.cards.length;
      // let misoPlayed = false;
      // userKeys.forEach(user => {
      //   if (user !== localUser) {
      //     if (users[user].playedCards.cards && users[user].playedCards.cards[cardNum] && users[user].playedCards.cards[cardNum].card === 'miso-soup') {
      //        misoPlayed = true;
      //       users[user].playedCards.cards[cardNum].cancelled = true;
      //     }
      //   }
      // })
      if (this.state.misoPlayed === true) {
        userKeys.forEach(user => {
          let length =  0;
          let cardsCopy = [];
          if (users[user].playedCards.cards) {
            cardsCopy = [...users[user].playedCards.cards];
            length = users[user].playedCards.cards.length;
          }
          const lastCard = cardsCopy.pop();
          console.log(cardsCopy)
          console.log(lastCard)
          if (lastCard && lastCard.card === 'miso-soup') {
            users[user].playedCards.cards[length - 1].cancelled = true;
          }
          // if (users[user].playedCards.cards && lastCard === 'miso-soup') {
          //   console.log(`${user} played miso too!`)
          // }
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
      users[localUser].playedCards.wasabiWaiting = true;
    }
    // mark user as ready
    users[localUser].playedCards.ready = true;
    this.setState({ users })
    // remove from hands state
    const newHand = [
      ...hands[handRef].slice(0, hands[handRef].indexOf(card)),
      ...hands[handRef].slice(hands[handRef].indexOf(card) + 1),
    ]
    hands[handRef] = newHand;
    setTimeout(() => { this.setState({ hands }) }, 500);
    // check if all players are ready
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
      this.revealCards()
      this.setState({ misoPlayed: false })
    }
  }

  revealCards = () => {
    const users = { ...this.state.users };
    const userKeys = Object.keys(users);
    const hands = {...this.state.hands}
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
      if (Object.keys(hands).length < userKeys.length) {
        setTimeout(() => {
          if (this.state.roundScoreCalculated === false) {
            this.calculateScore();
          }
          this.setState({ roundEnd: true })
          this.setState({ roundScoreCalculated: true })
          console.count('revealCards')
        }, 2000)
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
    userKeys.forEach(user => {
      const userCards = users[user].playedCards.cards;
      let score = 0;
      let tempura = 0;
      let sashimi = 0;
      let makiScore = 0;
      if (users[user].score) {
        score = users[user].score;
      }
      userCards.forEach(card => {
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
        let thirdPlace;
        makiWinnerOrder.forEach((winner, index) => {
          if (index === 0) {
            console.log(users[winner[0]].score)
            users[winner[0]].score = users[winner[0]].score + 6;
            console.log(winner[0], ' came first!', users[winner[0]].score);
          } else if (index === 1) {
            console.log(users[winner[0]].score)
            users[winner[0]].score = users[winner[0]].score + 4;
            console.log(winner[0], ' came second!', users[winner[0]].score);
          } else if (index === 2) {
            console.log(users[winner[0]].score)
            users[winner[0]].score = users[winner[0]].score + 2;
            console.log(winner[0], ' came third!', users[winner[0]].score);
            thirdPlace = winner[1];
          } else if (winner[1] === thirdPlace) {
            console.log(users[winner[0]].score)
            users[winner[0]].score = users[winner[0]].score + 2;
            console.log(winner[0], ' tied third!', users[winner[0]].score);
          }
        }) 
      } else {

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
    })
    this.handleSettingsDisplay();
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