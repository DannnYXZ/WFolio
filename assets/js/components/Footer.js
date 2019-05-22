import React from 'react';
import './Footer.css'

class Footer extends React.Component {
    render() {
        return (
            <footer className="main-footer">
                <div className="footer-content text-section wysiwyg"><p>Фотограф в Краснодаре Руслан Поляков</p><p><b><a
                    href="tel:+79649111150" target="_blank">+7-964-911-11-50</a></b></p></div>
                <div className="branding">Сайт от DannnYX</div>
            </footer>
        );
    }
}

export default Footer;