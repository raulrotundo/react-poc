import React, { Component } from 'react';
import { connect } from 'react-redux';
import SidebarComponent from './sidebar-component';
import { setExpandClass } from './sidebar-actions';

class SidebarContainer extends Component {

  constructor(props) {
    super(props);
    this.setExpandClass = this.setExpandClass.bind(this);
  }

  setExpandClass(activeMenu) {
    let showMenu = activeMenu === this.props.sidebar.activeMenu ? '' : activeMenu;
    this.props.setExpandClass(showMenu);
  }

  render() {
    return <SidebarComponent activeMenu={this.props.sidebar.activeMenu} setExpandClass={this.setExpandClass} />;
  }
}

const mapStateToProps = state => {
  return state.sidebar;
}

const mapDispatchToProps = dispatch => {
  return {
    setExpandClass: (activeMenu) => { dispatch(setExpandClass(activeMenu)) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer);