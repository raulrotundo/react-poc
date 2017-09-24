import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavbarTogglerComponent from './navbar-toggler-component';
import { setNavbarTogglerDropDown } from './navbar-toggler-actions';

class NavbarTogglerContainer extends Component {

  constructor(props) {
    super(props);
    this.setNavbarTogglerDropDown = this.setNavbarTogglerDropDown.bind(this);
  }

  setNavbarTogglerDropDown(navbarToggler) {
    let activeNavbarToggler = navbarToggler === this.props.toggler.activeNavbarToggler ? '' : navbarToggler;
    this.props.setNavbarTogglerDropDown(activeNavbarToggler);
  }

  render() {
    return <NavbarTogglerComponent
      activeNavbarToggler={this.props.toggler.activeNavbarToggler}
      setNavbarTogglerDropDown={this.setNavbarTogglerDropDown}
    />;
  }
}

const mapStateToProps = state => {
  return state.navbar;
}

const mapDispatchToProps = dispatch => {
  return {
    setNavbarTogglerDropDown: (activeNavbarToggler) => {
      dispatch(setNavbarTogglerDropDown(activeNavbarToggler))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarTogglerContainer);