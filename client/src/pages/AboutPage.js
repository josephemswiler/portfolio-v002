import React, { Component } from 'react';

export default class AboutPage extends Component {
  render() {
    return (
      <div className="aboutpage">
        { this.props.children }
      </div>
    )
  }
}
