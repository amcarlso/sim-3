import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

function Nav(props) {
  console.log(props)
    return (
    <div>
      <Link to='/dashboard'><button>Home</button></Link>
      <Link to='/new'><button>New Post</button></Link>
      <Link to='/'><button>Logout</button></Link>
      <div>
        {props.username}
      </div>
      <div>
        <img src={props.profilePic} alt='profile pic'/>
      </div>
    </div>
  )
}

const mapStateToProps = (reduxState) => {
  const {username, profilePic} = reduxState;
  return {username, profilePic}
};

export default connect(mapStateToProps)(Nav);
