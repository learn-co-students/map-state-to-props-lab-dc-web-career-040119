import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          <div>Total Users: {this.props.users.length}</div>
          {this.props.users.map((user)=> (
            <li>Username: {user.username}
                HomeTown: {user.hometown}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {users: state.users}
}


export default connect(mapStateToProps)(Users)
