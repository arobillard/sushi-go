import React from 'react';

class PointsGridItem extends React.Component {

  render() {
    const userData = this.props.userData;
    return (
      <div className={`xs-1-2 m-1-${this.props.widthL} island-1-2`}>
        <div className={`points-grid-item bg-${userData.color} embed-1by1`}>
          <div>
            <h3 className="headline-4">{userData.userName}</h3>
            <strong>{this.props.score}</strong>
          </div>
        </div>
      </div>
    )
  }

}

export default PointsGridItem;