import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavbarTogglerComponent from './navbar-toggler-component';
import { setNavbarTogglerDropDown } from './navbar-toggler-actions';

class NavbarTogglerContainer extends Component {

  constructor(props) {
    super(props);
    this.setNavbarTogglerDropDown = this.setNavbarTogglerDropDown.bind(this);
  }

  setNavbarTogglerDropDown() {
    this.props.setNavbarTogglerDropDown(!this.props.toggler.dropdownOpen);
  }

  render() {
    return <NavbarTogglerComponent
      dropdownOpen={this.props.toggler.dropdownOpen}
      setNavbarTogglerDropDown={this.setNavbarTogglerDropDown}
    />;
  }
}

const mapStateToProps = state => {
  return state.navbar;
}

const mapDispatchToProps = dispatch => {
  return {
    setNavbarTogglerDropDown: (dropdownOpen) => { dispatch(setNavbarTogglerDropDown(dropdownOpen)) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarTogglerContainer);