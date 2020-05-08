import React from 'react';

class AddUser extends React.Component {

  handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      userName: e.target.userName.value,
      color: e.target.color.value
    }
    const userCount = Object.keys(this.props.users).length;
    if (this.props.claimedColors[e.target.color.value] !== true && userCount < 8) {
      this.props.addUser(newUser);
    }
  }

  render() {
    return (
      <form className="pop-up-add-user island-2" onSubmit={this.handleAddUser}>
        <h2>Enter your name and pick a colour!</h2>
        <div className="grid-colors">
          {Object.keys(this.props.claimedColors).map(key => (
            <div key={key} className="color-swatch">
              <input
                id={`c-${key}`}
                type="radio"
                name="color"
                value={key}
                disabled={this.props.claimedColors[key]}
                defaultChecked={key === "purple"}
              />
              <label
                className={`bg-${key}`}
                htmlFor={`c-${key}`}
              >
                <span>Purple</span>
              </label>
            </div>
          ))}
        </div>
        <div className="grid-flex">
          <input
            name="userName"
            type="text"
            ref={this.userNameInput}
            required
            placeholder="User Name"
            defaultValue="Grug"
          />
          <button className="btn btn-medium btn-no-shadow" type="submit">Join</button>
        </div>
      </form>
    )
  }

}

export default AddUser;