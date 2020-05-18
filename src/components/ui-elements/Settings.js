import React from 'react';

class Settings extends React.Component {

  handleExitToLobby = () => {
    this.props.exitToLobby();
  }

  render() {
    return (
      <div className="pop-up-settings island-2">
        <h2>Settings</h2>
        <button onClick={this.props.handleSettingsDisplay} className="btn-x-close">X</button>
        <div className="settings-grid">
          <button onClick={this.handleExitToLobby}>Exit to Lobby</button>
        </div>
      </div>
    )
  }

}

export default Settings;