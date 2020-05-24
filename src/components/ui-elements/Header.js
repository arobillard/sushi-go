import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {

  displayTitle = () => {
    if (this.props.subtitle === undefined) {
      return (
        <Link to="/">
          <h1 className="logo">S<span className="s-hide">ushi </span>G<span className="s-hide">o</span>!</h1>
        </Link>
      )
    } else {
      return (
        <Link to="/">
          <strong className="logo">S<span className="s-hide">ushi </span>G<span className="s-hide">o</span>!</strong>
        </Link>
      )
    }
  }

  displaySubtitle = () => {
    if (this.props.subtitle !== undefined) {
      return (
          <h1 className="subtitle gutter-2 push-0 spread-right">{this.props.subtitle}</h1>
      )
    }
  }

  handleSettings = () => {
    this.props.handleSettingsDisplay()
  }

  displayGamecode = () => {
    if (this.props.gamecode !== undefined) {
      if (this.props.host && this.props.gameStart) {
        return (
          <div className="game-info-wrap pad-t-1-2 pad-b-1-2">
            <button onClick={this.handleSettings} className="push-r-2 ar-icon-wrap"><i className="ar-icon-1-1-2 push-1-2 push-r-1-2"><img src="images/i-settings.svg" alt="" /></i><span className="ar-icon-label">Settings</span></button>
            <p className="push-0"><span className="gamecode-title">Gamecode: </span><span className="gamecode push-l">{this.props.gamecode}</span></p>
          </div>
        )
      }
      return (
        <div className="game-info-wrap pad-t-1-2 pad-b-1-2">
          <p className="push-0"><span className="gamecode-title">Gamecode: </span><span className="gamecode push-l">{this.props.gamecode}</span></p>
        </div>
      )
    }
  }

  render() {
    return (
      <header className='masthead'>
        <div className="wrapper gutter">
          {this.displayTitle()}
          {this.displaySubtitle()}
          {this.displayGamecode()}
        </div>
      </header>
    )
  }

}

export default Header;