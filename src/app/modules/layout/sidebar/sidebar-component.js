import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar-component.css';

const SidebarComponent = (props) => {
  const { activeMenu, setExpandClass } = props;
  return (
    <nav className="sidebar">
      <ul className="list-group">
        <Link to="/app" className="list-group-item">
          <i className="fa fa-fw fa-dashboard"></i>&nbsp; Dashboard
          </Link>
        <div className="nested-menu">
          <a className="list-group-item" onClick={() => setExpandClass('order')}>
            <span><i className="fa fa-shopping-bag"></i>&nbsp; Orders</span>
          </a>
          <li className={activeMenu === 'order' ? 'nested expand' : 'nested'}>
            <ul className="submenu">
              <li>
                <Link to="/app/orders/review-orders" className="list-group-item">
                  <span><i className="fa fa-chevron-right"></i>&nbsp; Review Orders</span>
                </Link>
              </li>
              <li>
                <Link to="/app/orders/new-order" className="list-group-item">
                  <span><i className="fa fa-chevron-right"></i>&nbsp; New Order</span>
                </Link>
              </li>
            </ul>
          </li>
        </div>
      </ul >
    </nav >
  );
}

export default SidebarComponent;
