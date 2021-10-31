import React, { Component } from "react";

export default class FormDemo1 extends Component {
  state = { username: '', city:'' };
  onChangeHandler = (event) => {
    //this.setState({ username: event.target.value });
    let name = event.target.name;
    let value = event.target.value;

    this.setState({[name]:value})
  };

  onSubmitHandler = (event) => {
      event.preventDefault();
    alert(this.state.username)
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <h3>Username</h3>
          <input name="username" type="text" onChange={this.onChangeHandler} />
          <h3>Username is {this.state.username}</h3>

          <h3>City</h3>
          <input name="city" type="text" onChange={this.onChangeHandler} />
          <h3>City is {this.state.city}</h3>

          <input type="submit" value="Save" />
        </form>
      </div>
    );
  }
}
