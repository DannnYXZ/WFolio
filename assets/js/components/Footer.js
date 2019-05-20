import React from 'react';
import './Footer.css'

class Footer extends React.Component {
    render() {
        return (
            <footer className="main-footer">
                <div className="footer-content text-section wysiwyg"><p>Фотограф в Краснодаре Руслан Поляков</p><p><b><a
                    href="tel:+79649111150" target="_blank">+7-964-911-11-50</a></b></p></div>
                <div className="branding">Сайт от <a
                    href="https://wfolio.ru?utm_campaign=branding&amp;source=ruslanpolyakov.ru"
                    target="_blank">wfolio</a></div>
            </footer>
        );
    }
}

export default Footer;