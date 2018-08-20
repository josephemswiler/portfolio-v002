import React from 'react'
import { Link } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Tooltip
} from 'reactstrap'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, fab)

export default class NavTop extends React.Component {
  constructor (props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.tooltipToggle = this.tooltipToggle.bind(this)
    this.state = {
      isOpen: false,
      tooltipOpen: false
    }
  }

  componentDidMount () {
    window.addEventListener('resize', this.windowResize)
  }

  windowResize = () => {
    console.log(this.state.isOpen)
  }

  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    })
    // this.props.toggleOverlay()
  }

  tooltipToggle () {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    })
  }

  styles = () => ({
    navbar: {
      justifyContent: 'center',
      alignContent: 'center',
      border: 'none',
      boxShadow: 'none',
      fontFamily: `'Nunito', sans-serif`,
      color: '#fff',
    },
    brand: {
      position: 'absolute',
      top: '.25rem',
    },
    icon: {
      fontSize: '20px'
    },
    toggler: {
      fontSize: '20px',
      outline: 'none'
    }
  })

  render () {

    let toggleIcon = this.state.isOpen ? 'angle-up' : 'angle-down'
    
    return (
      <div>
        <Navbar style={this.styles().navbar} className='transparent fixed-top' dark expand='md'>
          <Link style={this.styles().brand} className='navbar-brand' to='/'>
            Joseph Emswiler
          </Link>
          <NavbarToggler style={this.styles().toggler} className='mr-auto border-0' onClick={this.toggle}>
            <FontAwesomeIcon
              icon={['fas', toggleIcon]}
            />
          </NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='mr-auto' navbar>
              <NavItem>
                <Link className='nav-link' to='/projects/'>Projects</Link>
              </NavItem>
              <NavItem>
                <Link className='nav-link' to='/about'>About</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}