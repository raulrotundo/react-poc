import React, { Component } from 'react';
import './header.css';
//import { FormControl, Button, Image, Nav } from 'react-bootstrap';

class Header extends Component {

  sidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-hidden');
  }

  sidebarMinimize(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-minimized');
  }

  mobileSidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-mobile-show');
  }

  asideToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('aside-menu-hidden');
  }
  render() {
    return (
      <div className="pos-f-t fixed-top header">
        <nav className="navbar navbar-inverse bg-inverse navbar-toggleable-md">
          <button className="navbar-toggler navbar-toggler-right">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">React POC</a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto mt-2 mt-md-0">
              <li className="nav-item dropdown">
                <a className="nav-link" href="javascript:void(0)">
                  <i className="fa fa-envelope"></i> <b className="caret"></b><span className="sr-only">(current)</span>
                </a>
                <ul className="dropdown-menu dropdown-menu-right messages">
                  <li className="media">
                    <img className="d-flex align-self-center mr-3" src="http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg" alt="Generic placeholder image" />
                    <div className="media-body">
                      <h5 className="mt-0 mb-1">John Smith</h5>
                      <p className="small text-muted"><i className="fa fa-clock-o"></i> Yesterday at 4:32 PM</p>
                      <p className="last"> Lorem ipsum dolor sit amet, consectetur...</p>
                    </div>
                  </li>
                  <li className="media">
                    <img className="d-flex align-self-center mr-3" src="http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg" alt="Generic placeholder image" />
                    <div className="media-body">
                      <h5 className="mt-0 mb-1">John Smith</h5>
                      <p className="small text-muted"><i className="fa fa-clock-o"></i> Yesterday at 4:32 PM</p>
                      <p className="last"> Lorem ipsum dolor sit amet, consectetur...</p>
                    </div>
                  </li>
                  <li className="media">
                    <img className="d-flex align-self-center mr-3" src="http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg" alt="Generic placeholder image" />
                    <div className="media-body">
                      <h5 className="mt-0 mb-1">John Smith</h5>
                      <p className="small text-muted"><i className="fa fa-clock-o"></i> Yesterday at 4:32 PM</p>
                      <p className="last"> Lorem ipsum dolor sit amet, consectetur...</p>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a href="javascript:void(0)" className="nav-link">
                  <i className="fa fa-bell"></i> <b className="caret"></b><span className="sr-only">(current)</span>
                </a>
                <ul className="dropdown-menu dropdown-menu-right">
                  <a href="javascript:void(0)" className="dropdown-item">Pending Task <span className="badge badge-info">6</span></a>
                  <a href="javascript:void(0)" className="dropdown-item">In queue <span className="badge badge-info"> 13</span></a>
                  <a href="javascript:void(0)" className="dropdown-item">Mail <span className="badge badge-info"> 45</span></a>
                  <li className="dropdown-divider"></li>
                  <a href="javascript:void(0)" className="dropdown-item">View All</a>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a href="javascript:void(0)" className="nav-link">
                  <i className="fa fa-language"></i> Language <b className="caret"></b>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="javascript:void(0)">English</a>
                  <a className="dropdown-item" href="javascript:void(0)">French</a>
                  <a className="dropdown-item" href="javascript:void(0)">Urdu</a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a href="javascript:void(0)" className="nav-link">
                  <i className="fa fa-user"></i> John Smith <b className="caret"></b>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="javascript:void(0)"><i className="fa fa-fw fa-user"></i> Profile</a>
                  <a className="dropdown-item" href="javascript:void(0)"><i className="fa fa-fw fa-envelope"></i> Inbox</a>
                  <a className="dropdown-item" href="javascript:void(0)"><i className="fa fa-fw fa-gear"></i> Settings</a>
                  <a className="dropdown-item"><i className="fa fa-fw fa-power-off"></i> Log Out</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
