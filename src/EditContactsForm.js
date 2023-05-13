import React, { Component } from 'react';
import Contact from './Contacts';

export class EditContactsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.contact.name,
      phone: this.props.contact.phone,
      location: this.props.contact.location
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.edit(this.state.phone, this.state);
  };

  render() {
    return (
      <div>
        <form className="form-group" onSubmit={this.handleSubmit}>
          <label htmlFor="exampleInputName">Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputText"
            placeholder="Enter Name"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          />

          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputLocation">location</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputText"
              placeholder="Enter location"
              name="location"
              onChange={this.handleChange}
              value={this.state.location}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}


