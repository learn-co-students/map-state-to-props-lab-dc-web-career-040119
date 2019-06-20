import React, { Component } from 'react';
import {connect} from 'react-redux'

class Users extends Component {

  render() {
    debugger
    return (
      <div>
        <ul>
          {this.props.users.map(user => <li>{user.username}</li>)}
        </ul>
        <p>{this.props.users.length}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // debugger;
  return { users: state.users }
}

export default connect(mapStateToProps)(Users)
