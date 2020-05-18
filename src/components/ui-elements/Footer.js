import React from 'react';

class Footer extends React.Component {

  render() {
    return (
      <footer className="footer">
        <div className="wrapper grid-flex-v-bottom pad-t-b-1-1-2 gutter-1-2">
          <div className="xs-1 m-1-2 island-1-2">
            <strong className="logo headline-1 block">Sushi Go!</strong>
            <p className="body-2 push-0">Based on popular table top game <a href="https://gamewright.com/product/Sushi-Go" target="_blank" rel="noopener noreferrer">Sushi Go</a> by <a href="https://gamewright.com/" target="_blank" rel="noopener noreferrer">Gamewright</a>.</p>
          </div>
          <div className="xs-1 m-1-2 island-1-2">
            <p className="body-2 push-0">Designed and developed for personal use only by <a href="https://adamrobillard.ca">Adam Robillard</a>.</p>
            <p className="body-2 push-0">Sushi illustrations by <a href="https://hannahdel.ca">Hannah Delaney</a>.</p>
          </div>
        </div>
      </footer>
    )
  }

}

export default Footer;