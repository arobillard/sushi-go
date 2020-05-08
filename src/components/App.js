import React from 'react';
import Header from './ui-elements/Header'
import Footer from './ui-elements/Footer'
import { cards, deck } from '../cardData'
import Lobby from './ui-elements/Lobby';

class App extends React.Component {

  state = {
    deck: {},
    users: {
      Adam: {
        userName: "Adam",
        color: "purple"
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
    claimedColors: {
      purple: true,
      green: true,
      turquoise: true,
      yellow: true,
      cyan: true,
      navy: false,
      pink: false,
      red: false
    },
    localUser: null,
    gameStart: false,
    round: 1
  }

  componentDidMount() {
    const localStorageRef = localStorage.getItem(this.props.match.params.gamecode); //first reinstate localstorage
    const localUser = JSON.parse(localStorage.getItem('localUser')); //first reinstate localstorage
    if (localStorageRef) {
      const savedState = JSON.parse(localStorageRef);
      console.log(savedState)
      this.setState({
        deck: savedState.deck,
        users: savedState.users,
        claimedColors: savedState.claimedColors,
        localUser: localUser,
        gameStart: savedState.gameStart,
        round: savedState.round,
      })
    }
    // this.setState({ deck: deck() });
  }

  componentDidUpdate() {
    localStorage.setItem(this.props.match.params.gamecode, JSON.stringify(this.state))
    localStorage.setItem('localUser', JSON.stringify(this.state.localUser))
  }

  addUser = (newUser) => {
    const users = {...this.state.users};
    const claimedColors = {...this.state.claimedColors}
    users[newUser.userName] = newUser;
    claimedColors[newUser.color] = true;
    this.setState({
      users: users,
      localUser: newUser.userName,
      claimedColors: claimedColors
    });
  }

  gameBoardDisplay = () => {
    const gamecode = this.props.match.params.gamecode;
    if (this.state.gameStart === true) {

    } else {
      return (
        <Lobby
          gamecode={gamecode}
          users={this.state.users}
          addUser={this.addUser}
          localUser={this.state.localUser}
          claimedColors={this.state.claimedColors}
        />
      )
    }
  }

  render() {
    const gamecode = this.props.match.params.gamecode;
    return (
      <>
        <Header
          subtitle="Lobby"
          gamecode={gamecode}
        />
        <main id="main" role="main" className="flex pad-t-8 pad-b-4">
          {this.gameBoardDisplay()}
        </main>
        <Footer />
      </>
    )
  }

}

export default App;