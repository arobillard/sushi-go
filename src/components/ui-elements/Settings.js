import React from 'react';

class Settings extends React.Component {

  handleExitToLobby = () => {
    this.props.exitToLobby();
  }
  handleRestart = () => {
    this.props.exitToLobby();
    this.props.startGame();
  }

  render() {
    return (
      <div className="pop-up-settings island-2">
        <h2 className="push-2">Settings</h2>
        <button onClick={this.props.handleSettingsDisplay} className="btn-x-close">X</button>
        <div className="settings-grid">
          <div className="grid-flex-v-middle grid-flex-h-split push">
            <h3 className="headline-5 push-0">Quit current game:</h3>
            <button className="btn" onClick={this.handleExitToLobby}>Exit to Lobby</button>
          </div>
          <div className="grid-flex-v-middle grid-flex-h-split">
            <div>
              <h3 className="headline-5 push-0">Restart game:</h3>
              <p className="push body-2">This will start a new game with new random hands.</p>
            </div>
            <button className="btn" onClick={this.handleRestart}>Restart Game</button>
          </div>
        </div>
      </div>
    )
  }

}

export default Settings;