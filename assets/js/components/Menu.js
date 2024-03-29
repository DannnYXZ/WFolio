import React from 'react';
import './Menu.css'

class Menu extends React.Component {
    render() {
        return (
            <div className="menu js-menu">
                <ul className="menu-list ">
                    <li className="menu-item"><a className="link" href="/price">PRICE</a></li>
                    <li className="menu-item"><a className="link" href="/">WEDDING</a></li>
                    <li className="menu-item"><a className="link" href="/feedback">FEEDBACK</a></li>
                    <li className="menu-item"><a className="link" href="/contacts">CONTACTS</a></li>
                </ul>
            </div>
        );
    }
}

export default Menu;