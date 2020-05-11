import React from 'react';
import base from '../base';
import Header from './ui-elements/Header'
import Footer from './ui-elements/Footer'
import { cards, deck } from '../cardData'
import Lobby from './ui-elements/Lobby';
import GameBoard from './ui-elements/GameBoard';

class App extends React.Component {

  state = {
    deck: {},
    users: {
      // Adam: {
      //   userName: "Adam",
      //   color: "purple"
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
    round: {}
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
      console.log(this.state.gameStart)
      if (this.state.gameStart === {}) {
        console.log('dumb gamestart')
      }
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
      console.log(userKeys);
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
    this.setState({
      gameStart: true,
      round: 2
     })
     this.newRound(userCount, fullDeck);
  }

  newRound = (userCount, fullDeck) => {
    const newFullDeck = fullDeck;
    let i = 0;
    if (this.state.round === 1) {
      while (i < (userCount < 6 ? 5 : 7)) {
        newFullDeck.push('ice-cream');
        i++;
      }
    } else if (this.state.round === 2) {
      console.log('did it')
      while (i < (userCount < 6 ? 3 : 5)) {
        newFullDeck.push('ice-cream');
        i++;
      }
    } else if (this.state.round === 3) {
      while (i < (userCount < 6 ? 2 : 3)) {
        newFullDeck.push('ice-cream');
        i++;
      }
    } else {
      console.log(this.state.round)
    }
    this.setState({ deck: newFullDeck })
  }

  subtitleDisplay = () => {
    if (typeof this.state.gameStart === "object") {
      return 'Lobby'
    } else {
      return `Round ${this.state.round}`
    }
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
          userCount={userCount}
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
    return (
      <>
        <Header
          subtitle={this.subtitleDisplay()}
          gamecode={gamecode}
        />
        <main id="main" role="main" className="flex pad-t-6">
          {this.gameBoardDisplay()}
        </main>
        <Footer />
      </>
    )
  }

}

export default App;