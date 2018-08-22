import React, { Component } from 'react';

export default class UIUXPage extends Component {
  render() {
    return (
      <div className="uiuxpage">
        { this.props.children }
      </div>
    )
  }
}
