import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "",lname:"", mobile:"",email: "" });
  };
  render() {
    return (
      <div className="ui main">
        <h2>Add Employee</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>First Name</label>
            <input
              type="text"
              name="name"
              placeholder="First Name"
              value={this.state.name}
              onChange={(e) => this.setState({name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Last Name</label>
            <input
              type="text"
              name="name"
              placeholder="Last Name"
              value={this.state.lname}
              onChange={(e) => this.setState({lname: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Mobile No.</label>
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={this.state.mobile}
              onChange={(e) => this.setState({mobile: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
