import React from 'react';

class AddUser extends React.Component {

  handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      userName: e.target.userName.value,
      color: e.target.color.value
    }
    const userCount = Object.keys(this.props.users).length;
    const users = this.props.users;
    const userKeys = Object.keys(this.props.users);
    const usedColors = [];
    userKeys.forEach(key => {
      usedColors.push(users[key].color)
    })
    const colorCheck = usedColors.includes(e.target.color.value)
    if (colorCheck !== true && userCount < 8) {
      this.props.addUser(newUser);
    }
  }

  colorOptions = () => {
    const colors = ["purple", "green", "turquoise", "yellow", "cyan", "navy", "pink", "red"];
    const users = this.props.users;
    const userKeys = Object.keys(this.props.users);
    const usedColors = [];
    const colorOptions = []
    let i = 0;
    userKeys.forEach(key => {
      const index = colors.indexOf(users[key].color);
      usedColors.push(users[key].color)
      colors.splice(index, 1)
    })
    // available colors
    while (i < colors.length) {
      colorOptions.push(
        <div key={colors[i]} className="color-swatch">
          <input
            id={`c-${colors[i]}`}
            type="radio"
            name="color"
            value={colors[i]}
            defaultChecked={i === 0}
            required
          />
          <label
            className={`bg-${colors[i]}`}
            htmlFor={`c-${colors[i]}`}
          >
            <span>Purple</span>
          </label>
        </div>
      )
      i++;
    }
    i = 0;
    // unavailable colors
    while (i < usedColors.length) {
      colorOptions.push(
        <div key={usedColors[i]} className="color-swatch">
          <input
            id={`c-${usedColors[i]}`}
            type="radio"
            name="color"
            value={usedColors[i]}
            disabled={true}
          />
          <label
            className={`bg-${usedColors[i]}`}
            htmlFor={`c-${usedColors[i]}`}
          >
            <span>Purple</span>
          </label>
        </div>
      )
      i++;
    }
    return colorOptions;

  }

  render() {
    const users = this.props.users;
    const userKeys = Object.keys(this.props.users);
    if (userKeys.length >= 8) {
      return (
        <form className="pop-up-add-user island-2" onSubmit={this.handleAddUser}>
          <h2>Sorry, this game is full!</h2>
        </form>
      )
    } else {
      return (
        <form className="pop-up-add-user island-2" onSubmit={this.handleAddUser}>
          <h2>Enter your name and pick a colour!</h2>
          <div className="grid-colors">
            {this.colorOptions()}
          </div>
          <div className="grid-flex">
            <input
              name="userName"
              type="text"
              ref={this.userNameInput}
              required
              placeholder="User Name"
              defaultValue={this.props.localUser}
            />
            <button className="btn btn-medium btn-no-shadow" type="submit">Join</button>
          </div>
        </form>
      )
    }
  }

}

export default AddUser;