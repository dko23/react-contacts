import React, { Component } from 'react'

export class ContactsForm extends Component {
    constructor(props) {
        super(props)
        this.state = { name: "", phone: '', location: ''}
             
    }

    handlechange = (e) => {
        e.preventDefault()
        this.setState({ [e.target.name]: e.target.value })
      }

      onSubmit = (e) => {
        e.preventDefault();
        this.props.old(this.state);
        this.setState({ name: '', phone: '', location: '' });
      }
      

        render() {
            return (
                <div>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Name</label>
                            <input type="text" className="form-control" onChange={ this.handlechange} placeholder="Enter email" name='name' value={this.state.name}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Phone</label>
                            <input type="text" className="form-control" placeholder="text" name='phone' value={this.state.phone}  onChange={ this.handlechange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">location</label>
                            <input type="text" className="form-control" placeholder="location" name='location' value={this.state.location}  onChange={ this.handlechange}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            )
        }
    }


