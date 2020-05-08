import React from 'react';
import LobbyPlayerGrid from '../../scss/_ui/LobbyPlayerGrid';
import AddUser from './AddUser';

class Lobby extends React.Component {

  usersDisplay = () => {
    const users = Object.keys(this.props.users)
    if (users.includes(this.props.localUser)) {
      return (
        <LobbyPlayerGrid
          users={this.props.users}
        />
      )
    } else {
      return (
        <AddUser
          addUser={this.props.addUser}
          users={this.props.users}
          claimedColors={this.props.claimedColors}
        />
      )
    }
  }

  render() {
    return (
      <div className="wrapper grid-flex-v-middle island-1-2">
        <div className="xs-1 m-1-2 island-1-2">
          <h2 className="text-purple shadow-t-pink-2">Gamecode</h2>
          <strong className="gamecode-large block font-alt text-pink shadow-t-purple-4">{this.props.gamecode}</strong>
          <button className="btn btn-medium">Start Game!</button>
        </div>
        <div className="xs-1 m-1-2">
          {this.usersDisplay()}
        </div>
      </div>
    )
  }

}

export default Lobby;