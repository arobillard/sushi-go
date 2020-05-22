import React from 'react';
import { cards } from '../../cardData'
import PointsGridItem from './PointsGridItem';

class RoundEnd extends React.Component {

  componentDidMount() {
    const users = {...this.props.users}
    const localUser = this.props.localUser;
  }

  handleStartNextRound = () => {
    this.props.startNewRound();
  }

  handleExitToLobby = () => {
    this.props.exitToLobby();
  }

  render() {
    const users = {...this.props.users}
    const userKeys = Object.keys(users);
    const userAmount = userKeys.length;
    const widthL = userKeys.length / 2;
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
        <div className="island">
          {this.props.round === 3 ? <button className="btn" onClick={this.handleExitToLobby}>Return to Lobby</button> : <button className="btn" onClick={this.handleStartNextRound}>Start Next Round!</button>}
        </div>
      </div>
    )
  }

}

export default RoundEnd;