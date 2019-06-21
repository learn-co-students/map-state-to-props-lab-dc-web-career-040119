import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

    render() {
        const userElements = this.props.users.map((user, i) => (
            <li key={`${user.username}-${user.hometown}-${i}`}>{user.username}</li>
        ))
        return (
            <div>
                Whoa! {this.props.userCount} users!
                <ul>
                    {userElements}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({users: state.users, userCount: state.users.length})

export default connect(mapStateToProps)(Users)
