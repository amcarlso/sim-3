import React, {Component} from 'react';
import Nav from '../Nav/Nav';

export default class Form extends Component {
  render() {
    return (
      <div>
        {(this.props.location.pathname !== '/') ? <Nav /> : null}
        Form
      </div>
    )
  }
}