import React from 'react';
import Header from '../ui-elements/Header'
import Footer from '../ui-elements/Footer'
import { slugify, gameCode } from '../../helpers'

class Join extends React.Component {
  gcInput = React.createRef();
  joinGame = (e) => {
    // stop form from submiting
    e.preventDefault();
    // get gamecode from input
    const gamecode = this.gcInput.current.value;
    //change page to the gamecode
    this.props.history.push(`/${slugify(gamecode)}`);
  }

  render() {
    return (
      <>
        <Header />
        <main id="main" role="main" className="flex-children-center pad-t-b-8">
          <form className="pop-up-join-game island-2" onSubmit={this.joinGame}>
            <h2>Join or host a game!</h2>
            <p>To start a new game, simply enter your name and a new unique <strong>Gamecode</strong> in the form below and hit <em>Start Playing</em>! If you wish to join a game someone else created, enter your name and their <strong>Gamecode</strong> and hit <em>Start Playing</em>!</p>
            <div className="grid-flex">
              <input
                className="xs-1-2"
                type="text"
                ref={this.gcInput}
                required
                placeholder="Enter Gamecode"
                defaultValue={gameCode()}
              />
              <button className="btn btn-medium btn-no-shadow xs-1-2" type="submit">Start Playing!</button>
            </div>
          </form>
        </main>
        <Footer />
      </>
    )
  }

}

export default Join;