import React from 'react';
import PointsGridItem from './PointsGridItem';

class RoundEnd extends React.Component {

  handleStartNextRound = () => {
    this.props.startNewRound();
  }

  handleExitToLobby = () => {
    this.props.exitToLobby();
  }

  handleRestart = () => {
    this.props.exitToLobby();
    this.props.startGame();
  }

  nextRoundBtn = () => {
    const users = { ...this.props.users }
    const localUser = this.props.localUser;
    const host = users[localUser].host;
    if (host) {
      return (
        <div className="island">
          {this.props.round === 3 ? <><button className="btn push-r" onClick={this.handleExitToLobby}>Return to Lobby</button><button className="btn btn-pink" onClick={this.handleRestart}>Restart Game</button></> : <button className="btn" onClick={this.handleStartNextRound}>Start Next Round!</button>}
        </div>
      )
    }
  }

  render() {
    const users = {...this.props.users}
    const userKeys = Object.keys(users);
    const userAmount = userKeys.length;
    let widthL;
    if (userAmount === 2 || userAmount === 4 || userAmount === 7 || userAmount === 8) {
      widthL = 4
    } else if (userAmount === 3 || userAmount === 5 || userAmount === 6) {
      widthL = 3;
    }
    return (
      <div className="pop-up-round-end island">
        <div className="island">
          <h2 className="headline-1">{this.props.round === 3 ? 'Game Over!' : `End of Round ${this.props.round}`}</h2>
        </div>
        <div className="points-grid grid-flex island-1-2">
          {userKeys.map(user => {
            const userData = users[user];
            return (
              <PointsGridItem
                key={`points-${user}`}
                userData={userData}
                widthL={widthL}
                score={userData.score ? userData.score : '0'}
              />
            )
          })}
        </div>
        {this.nextRoundBtn()}
      </div>
    )
  }

}

export default RoundEnd;