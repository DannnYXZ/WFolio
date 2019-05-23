import React from 'react';
import './Template.css'
import SideBar from "./SideBar";
import Menu from "./Menu.js";
import Footer from './Footer.js'
import User from "./User";

class Template extends React.Component {
    render() {
        return (
            <div className="theme-mint">
                <div className="page-wrapper">
                    <SideBar/>
                    <main className="page-main js-main js-scrollable">
                        <div className="main-wrapper">
                            <header className="main-header js-header -visible">
                                <User/>
                                <Menu/>
                            </header>
                            <div className="main-content">
                                {this.props.children}
                            </div>
                        </div>
                        <Footer/>
                    </main>
                </div>
            </div>
        );
    }
}

export default Template;