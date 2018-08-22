import React, { Component } from 'react';

export default class AppsPage extends Component {
  render() {
    return (
      <div className="appspage">
        { this.props.children }
      </div>
    )
  }
}
