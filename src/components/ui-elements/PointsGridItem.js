import React from 'react';

class PointsGridItem extends React.Component {

  state = {
    score: 0
  }

  componentDidMount() {
    let updateScore = this.state.score;
    const scoreInterval = setInterval(() => {
      updateScore = updateScore + 1;
      this.setState({ score: updateScore })
    }, 50);
    setTimeout(() => {
      clearInterval(scoreInterval);
    }, 50 * this.props.score + 1)
  }

  render() {
    const userData = this.props.userData;
    return (
      <div className={`xs-1-2 m-1-4 island-1-2`}>
        <div className={`points-grid-item bg-${userData.color} embed-1by1`}>
          <div>
            <h3 className="headline-4">{userData.userName}</h3>
            <strong>{this.state.score}</strong>
          </div>
        </div>
      </div>
    )
  }

}

export default PointsGridItem;