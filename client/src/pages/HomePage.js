import React, { Component } from 'react'
import HomeContainer from '../components/containers/HomeContainer'

export default class HomePage extends Component {
  style = () => ({
    homePage: {
      height: '100vh',
      background: 'var(--dark-blue)',
      backgroundImage: `url(https://i.imgur.com/R4ofaq5.jpg)`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      fontFamily: `'Nunito', sans-serif`
    }
  })
  render () {
    return (
      <div style={this.style().homePage}>
        <HomeContainer />
      </div>
    )
  }
}
