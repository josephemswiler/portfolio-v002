import React, { Component } from 'react';

export default class ProjectsPage extends Component {
  render() {
    return (
      <div className="projectspage">
        { this.props.children }
      </div>
    )
  }
}
