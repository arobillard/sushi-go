import React from 'react';
import LobbyPlayerGrid from './LobbyPlayerGrid';
import AddUser from './AddUser';

class Lobby extends React.Component {

  usersDisplay = () => {
    const users = Object.keys(this.props.users)
    if (users.includes(this.props.localUser)) {
      return (
        <LobbyPlayerGrid
          users={this.props.users}
          deleteUser={this.props.deleteUser}
        />
      )
    } else {
      return (
        <AddUser
          addUser={this.props.addUser}
          localUser={this.props.localUser}
          users={this.props.users}
        />
      )
    }
  }

  startGame = () => {
    const localUser = this.props.localUser;
    const users = this.props.users;
    if (users[localUser] !== undefined) {
      if (users[localUser].host === true) {
        return (
          <button className="btn btn-medium" onClick={this.props.startGame}>Start Game!</button>
        )
      }
    }
  }

  render() {
    return (
      <div className="wrapper grid-flex-v-middle gutter-1-2 pad-t-1-2 pad-b-4">
        <div className="gamecode-box xs-1 l-1-2 island-1-2">
          <h2 className="text-purple shadow-t-pink-2">Gamecode</h2>
          <strong className="gamecode-large block font-alt text-pink shadow-t-purple-4">{this.props.gamecode}</strong>
          {this.startGame()}
        </div>
        <div className="xs-1 l-1-2 island-1-2">
          {this.usersDisplay()}
        </div>
      </div>
    )
  }

}

export default Lobby;