import React from 'react';

class LobbyPlayerGrid extends React.Component {

  emptyUsers = () => {
    const addAmount = 8 - Object.keys(this.props.users).length;
    const blanks = [];
    let i = 0;

    while (i < addAmount) {
      blanks.push(
        <div key={`unclaimed-${i}`} className="xs-1-2 m-1-3 island-1-2">
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

  render() {
    const users = this.props.users;
    return (
      <div className="player-card-grid grid-flex">
        {Object.keys(this.props.users).map(key => (
          <div key={key} className="xs-1-2 m-1-3 island-1-2">
            <div className={`embed-1by1 player-card bg-${users[key].color}`}>
              <div className="player-card-icon"></div>
              <h3 className="player-card-name">{users[key].userName}</h3>
            </div>
          </div>
        ))}
        {this.emptyUsers()}
        {/* <div className="xs-1-2 m-1-3 island-1-2">
          <div className={`embed-1by1 player-card  host ${user1Check ? `bg-${user1.color}` : "no-user"}`}>
            <div className="player-card-icon"></div>
            <h3 className="player-card-name">{user1Check ? user1.name : "---"}</h3>
          </div>
        </div>
        <div className="xs-1-2 m-1-3 island-1-2">
          <div className={`embed-1by1 player-card ${user2Check ? `bg-${user2.color}` : "no-user"}`}>
            <div className="player-card-icon"></div>
            <h3 className="player-card-name">{user2Check ? user2.name : "---"}</h3>
          </div>
        </div>
        <div className="xs-1-2 m-1-3 island-1-2">
          <div className={`embed-1by1 player-card ${user3Check ? `bg-${user3.color}` : "no-user"}`}>
            <div className="player-card-icon"></div>
            <h3 className="player-card-name">{user3Check ? user3.name : "---"}</h3>
          </div>
        </div>
        <div className="xs-1-2 m-1-3 island-1-2">
          <div className={`embed-1by1 player-card ${user4Check ? `bg-${user4.color}` : "no-user"}`}>
            <div className="player-card-icon"></div>
            <h3 className="player-card-name">{user4Check ? user4.name : "---"}</h3>
          </div>
        </div>
        <div className="xs-1-2 m-1-3 island-1-2">
          <div className={`embed-1by1 player-card ${user5Check ? `bg-${user5.color}` : "no-user"}`}>
            <div className="player-card-icon"></div>
            <h3 className="player-card-name">{user5Check ? user5.name : "---"}</h3>
          </div>
        </div>
        <div className="xs-1-2 m-1-3 island-1-2">
          <div className={`embed-1by1 player-card ${user6Check ? `bg-${user6.color}` : "no-user"}`}>
            <div className="player-card-icon"></div>
            <h3 className="player-card-name">{user6Check ? user6.name : "---"}</h3>
          </div>
        </div>
        <div className="xs-1-2 m-1-3 island-1-2">
          <div className={`embed-1by1 player-card ${user7Check ? `bg-${user7.color}` : "no-user"}`}>
            <div className="player-card-icon"></div>
            <h3 className="player-card-name">{user7Check ? user7.name : "---"}</h3>
          </div>
        </div>
        <div className="xs-1-2 m-1-3 island-1-2">
          <div className={`embed-1by1 player-card ${user8Check ? `bg-${user8.color}` : "no-user"}`}>
            <div className="player-card-icon"></div>
            <h3 className="player-card-name">{user8Check ? user8.name : "---"}</h3>
          </div>
        </div> */}
      </div>
    )
  }

}

export default LobbyPlayerGrid;