import React, {Component} from 'react';
import Nav from '../Nav/Nav';
import axios from 'axios';
import {connect} from 'react-redux';
import {updateUser} from '../../ducks/reducer';



class Auth extends Component {
  constructor(props){
    super(props)

    this.state = {
      username: '',
      password:'',
    }
  }

  register() {
    const {username, password} = this.state;
    axios.post('/auth/register', {username: username, password: password})
    .then(res => {
      this.props.updateUser(res.data[0])
      console.log(res.data)
    if (res.data.loggedIn) {
      this.props.history.push('/dashboard')
    }
    })
    
  }

  login() {
    const {username, password} = this.state;
    axios.post('/auth/login', {username: username, password: password})
    .then(res => {
      this.props.updateUser(res.data.userData[0])
      console.log(res.data)
      if (res.data.loggedIn) {
        this.props.history.push('/dashboard')
      }
    })
    
  }


  render() {
    return (
      <div>
        {(this.props.location.pathname !== '/') ? <Nav /> : null}
        Auth
        <p>
          <span>Username:</span>
          <input onChange={(e) => this.setState({username: e.target.value})} />
        </p>
        <p>
          <span>Password:</span>
          <input onChange={(e) => this.setState({password: e.target.value})} />
        </p>
        <button onClick={() => this.login()}>Login</button>
        <button onClick={() => this.register()}>Register</button>
      </div>
    )
  }
}

export default connect(null, {updateUser})(Auth);