import React, { Component } from 'react';
import HeaderCompanyTitle from './HeaderCompanyTitle';
import HeaderUserProfile from './HeaderUserProfile';
class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow     ">
                  <HeaderCompanyTitle />
                  
                  <HeaderUserProfile />
                  
                </nav>
            </div>
        );
    }
}

export default Header;