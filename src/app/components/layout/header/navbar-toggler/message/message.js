import React, { Component } from 'react';
import { NavDropdown, DropdownToggle, DropdownMenu, DropdownItem, Media } from 'reactstrap';

class Message extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <NavDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle nav caret><i className="fa fa-envelope"></i></DropdownToggle>
        <DropdownMenu className="dropdown-menu dropdown-menu-right messages">
          <DropdownItem>
            <Media>
              <img className="d-flex align-self-center mr-3" src="http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg" alt="Generic placeholder" />
              <Media body>
                <h5 className="mt-0 mb-1">John Smith</h5>
                <p className="small text-muted"><i className="fa fa-clock-o"></i> Yesterday at 4:32 PM</p>
                <p className="last"> Lorem ipsum dolor sit amet</p>
              </Media>
            </Media>
          </DropdownItem>
          <DropdownItem>
            <Media>
              <img className="d-flex align-self-center mr-3" src="http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg" alt="Generic placeholder" />
              <Media body>
                <h5 className="mt-0 mb-1">John Smith</h5>
                <p className="small text-muted"><i className="fa fa-clock-o"></i> Yesterday at 4:32 PM</p>
                <p className="last"> Lorem ipsum dolor sit amet</p>
              </Media>
            </Media>
          </DropdownItem>
          <DropdownItem>
            <Media>
              <img className="d-flex align-self-center mr-3" src="http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg" alt="Generic placeholder" />
              <Media body>
                <h5 className="mt-0 mb-1">John Smith</h5>
                <p className="small text-muted"><i className="fa fa-clock-o"></i> Yesterday at 4:32 PM</p>
                <p className="last"> Lorem ipsum dolor sit amet</p>
              </Media>
            </Media>
          </DropdownItem>
        </DropdownMenu>
      </NavDropdown>
    );
  }
}

export default Message;
