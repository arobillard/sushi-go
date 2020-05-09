import React from 'react';

class GameBoard extends React.Component {

  render() {
    return (
      <>
      <div className="card-panels wrapper gutter-1-2">
        <section className="local-user-cards gutter-1-2">
          <div className="panel-wrap bg-purple-faded">
            <div className="panel-score bg-purple">
              <strong className="score">0</strong>
              <span className="host-badge bg-pink">H</span>
            </div>
            <div className="panel-cards">
              <h2>Your Sushi</h2>
            </div>
            <div className="panel-dessert bg-pink">
              <h3>Dessert</h3>
            </div>
          </div>
        </section>
        <section className="user-cards gutter-1-2 push-2">
          <div className="card-column bg-green-faded">
            <div className="panel-score bg-green">
              <h2>Hannah:</h2>
              <strong className="score">0</strong>
            </div>
            <div className="panel-cards">
              <div className="sushi-family nigiri">
                <div className="card-sushi">
                  {/* <div className="card-sushi-sizer"> */}
                    <span className="card-points">3</span>
                  {/* </div> */}
                </div>
              </div>
            </div>
            <div className="panel-dessert bg-pink">

            </div>
          </div>
          <div className="card-column bg-green-faded">
            <div className="panel-score bg-green">
              <h2>Hannah:</h2>
              <strong className="score">0</strong>
            </div>
            <div className="panel-cards">

            </div>
            <div className="panel-dessert bg-pink">

            </div>
          </div>
          <div className="card-column bg-green-faded">
            <div className="panel-score bg-green">
              <h2>Hannah:</h2>
              <strong className="score">0</strong>
            </div>
            <div className="panel-cards">

            </div>
            <div className="panel-dessert bg-pink">

            </div>
          </div>
          <div className="card-column bg-green-faded">
            <div className="panel-score bg-green">
              <h2>Hannah:</h2>
              <strong className="score">0</strong>
            </div>
            <div className="panel-cards">

            </div>
            <div className="panel-dessert bg-pink">

            </div>
          </div>
          <div className="card-column bg-green-faded">
            <div className="panel-score bg-green">
              <h2>Hannah:</h2>
              <strong className="score">0</strong>
            </div>
            <div className="panel-cards">

            </div>
            <div className="panel-dessert bg-pink">

            </div>
          </div>
          <div className="card-column bg-green-faded">
            <div className="panel-score bg-green">
              <h2>Hannah:</h2>
              <strong className="score">0</strong>
            </div>
            <div className="panel-cards">

            </div>
            <div className="panel-dessert bg-pink">

            </div>
          </div>
          <div className="card-column bg-green-faded">
            <div className="panel-score bg-green">
              <h2>Hannah:</h2>
              <strong className="score">0</strong>
            </div>
            <div className="panel-cards">

            </div>
            <div className="panel-dessert bg-pink">

            </div>
          </div>
        </section>
      </div>

      </>
    )
  }

}

export default GameBoard;