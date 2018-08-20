import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import HomeCard from '../elements/HomeCard'

export default class HomeContainer extends Component {
  style = () => ({
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      textAlign: 'center'
    }
  })

  render () {
    return (
      <Container style={this.style().container}>
        <HomeCard />
      </Container>
    )
  }
}
