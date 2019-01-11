import React, {Component} from 'react';
import Nav from '../Nav/Nav';
import axios from 'axios';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: '',
      checkBox: true,
      posts: []
    }
  }

  componentDidMount(){
    this.getPosts()
  }

  getPosts() {
    axios.get('/api/posts?')
    .then(res => {
      this.setState({posts: res.data})
    })
  }
  render() {
    let mapPosts = this.state.posts.map( post => {
      return (
        <div key={post.id}>
        <h1>{post.title}</h1>
        <img src={post.img} height={50}/>
        <p>{post.content}</p>
        <p>by {post.username}</p>
        <img src={post.profile_pic} height={50}/>
          
          
        </div>
      )
    })
    console.log(this.props)
    return (
      <div>
        {(this.props.location.pathname !== '/') ? <Nav /> : null}
        Dashboard
        <input placeholder='Search by Title' onChange={(e) => this.setState({searchInput: e.target.value})}/>
        <button>Search</button>
        <button>Reset</button>
        <p>My Posts</p>
        <input type='checkbox'/>
        {mapPosts}
      </div>
    )
  }
}