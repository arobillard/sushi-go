import React from 'react';

class LobbyPlayerGrid extends React.Component {

  emptyUsers = () => {
    const addAmount = 8 - Object.keys(this.props.users).length;
    const blanks = [];
    let i = 0;

    while (i < addAmount) {
      blanks.push(
        <div key={`unclaimed-${i}`} className="xs-1-2 s-1-3 m-1-4 l-1-3 island-1-2">
          <div className="embed-1by1 player-card no-user">
            <div className="player-card-icon"></div>
            <h3 className="player-card-name">---</h3>
          </div>
        </div>
      )
      i++;
    }
    return blanks;
  }

  handleDeleteUser = (e) => {
    this.props.deleteUser(e.currentTarget.dataset.user);
  }

  render() {
    const users = this.props.users;
    return (
      <div className="player-card-grid grid-flex">
        {Object.keys(this.props.users).map(key => (
          <div key={key} className="xs-1-2 s-1-3 m-1-4 l-1-3 island-1-2">
            <div className={`embed-1by1 player-card bg-${users[key].color}${users[key].host ? ' host' : ''}`}>
              <div className="player-card-icon"></div>
              <h3 className="player-card-name">{users[key].userName}</h3>
              <button className="player-card-remove" data-user={key} onClick={this.handleDeleteUser} aria-label="Delete user">
                <i className="font-alt">X</i>
              </button>
            </div>
          </div>
        ))}
        {this.emptyUsers()}
      </div>
    )
  }

}

export default LobbyPlayerGrid;