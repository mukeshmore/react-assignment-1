import React, { Component } from 'react';

class LeftMenu extends Component {
    render() {
        return (
                <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
  <div className="sidebar-sticky pt-3">
    <ul className="nav">
      <li className="nav-item">
        <a className="nav-link active" href="/">
          <span data-feather="home"></span>
          Dashboard <span className="sr-only">(current)</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">
          <span data-feather="file"></span>
          Chargers
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">
          <span data-feather="shopping-cart"></span>
          Historical Reports
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">
          <span data-feather="users"></span>
          Customers
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">
          <span data-feather="bar-chart-2"></span>
          Reports
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">
          <span data-feather="layers"></span>
          Integrations
        </a>
      </li>
    </ul>

    
  </div>
</nav>
            
        );
    }
}

export default LeftMenu;