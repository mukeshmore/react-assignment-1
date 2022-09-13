import React, { Component } from 'react';

class HeaderUserProfile extends Component {
    render() {
        return (
            <div>
                <nav className="nav d-flex justify-content-between">
                    <a className="p-2 text-white" href="#">Mukesh More</a>
                    <a className="p-2 text-white" href="#">Sign out</a>
                </nav>
            </div>
        );
    }
}

export default HeaderUserProfile;