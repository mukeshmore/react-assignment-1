import React, { Component } from 'react';
import FooterCopyright from './FooterCopyright';
import FooterLinks from './FooterLinks';
class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="App-footer">
                    <div class="row">
                        <div class="col-md-2">
                            <FooterLinks />
                        </div>
                        <div class="col-md-10">
                            <FooterCopyright />
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;