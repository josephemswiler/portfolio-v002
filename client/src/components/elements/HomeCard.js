import React, { Component } from 'react'
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap'

export default class HomeCard extends Component {
  style = () => ({
    card: {
      maxWidth: 500,
      backgroundColor: 'transparent',
      border: 'none',
      boxShadow: 'none',
      color: '#fff'
    },
    body: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    title: {
      fontWeight: 900,
      fontSize: 60,
      width: 291,
      textAlign: 'justify',
      marginBottom: 0
    },
    button: {
      marginTop: '1.25rem',
      padding: 15,
      borderRadius: 1.5
    }
  })
  render () {
    return (
      <Card style={this.style().card}>
        <CardBody style={this.style().body}>
          <CardTitle style={this.style().title}>
            Full Stack Web & Mobile Developer
          </CardTitle>
          <Button block style={this.style().button}>Web & Mobile Applications →</Button>
          <Button block style={this.style().button}>← UI / UX Explorations</Button>
        </CardBody>
      </Card>
    )
  }
}
