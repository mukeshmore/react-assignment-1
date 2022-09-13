import React, { Component } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import LeftMenu from './LeftMenu';
import InnerContent from './InnerContent';
class Main extends Component {
    render() {
        return (
            <div>
                <Header />
					<div className="container-fluid row">
						<LeftMenu />
						<InnerContent />
                    </div>

	          <Footer />
            </div>
        );
    }
}

export default Main;