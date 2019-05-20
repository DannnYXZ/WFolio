import React from 'react';
import './SideBar.css'

class SideBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <aside className="page-sidebar">
                <div className="sidebar-background lazyloaded"
                     data-bg="https://cdn.wfolio.ru/w/23d70d16f710f115c2b32786c617133bf4f2c6cc/a_0.66667%2Cm_fill%2Cq_80%2Cw_1280/sites/670/assets/1524838428_2f2c0f.jpg"
                     style={{backgroundColor: 'rgb(94, 87, 75)', backgroundImage: 'url("https://cdn.wfolio.ru/w/23d70d16f710f115c2b32786c617133bf4f2c6cc/a_0.66667%2Cm_fill%2Cq_80%2Cw_1280/sites/670/assets/1524838428_2f2c0f.jpg")'}}>
                    <div className="sidebar-overlay">

                    </div>
                </div>
                <h1 className="logo js-logo">
                    <a className="logo-link"
                       title={this.props.title}
                       href="/">
                        <span
                            className="logo-with-placeholder"
                            style={{maxWidth: 249}}>
                            <canvas
                                className="logo-placeholder"
                                style={{width:935, height: 450, maxWidth: 249, maxHeight: 120}}>
                            </canvas>
                            <img
                                className="logo-image lazyloaded"
                                alt="Фотограф Руслан Поляков. Фотосъемка в России и Европе"
                                data-srcset="https://cdn.wfolio.ru/w/b42e36f7b41003c583ba044812ad8ee012bdb61e/h_120%2Cm_limit%2Cq_100%2Ct_1%2Cw_800/sites/670/assets/1524821405_28a150.png 1x, https://cdn.wfolio.ru/w/e688a996a3ff8e10ba8624775702740fd740d94f/h_240%2Cm_limit%2Cq_100%2Ct_1%2Cw_1600/sites/670/assets/1524821405_28a150.png 2x"
                                src="https://cdn.wfolio.ru/w/b42e36f7b41003c583ba044812ad8ee012bdb61e/h_120%2Cm_limit%2Cq_100%2Ct_1%2Cw_800/sites/670/assets/1524821405_28a150.png"
                                srcSet="https://cdn.wfolio.ru/w/b42e36f7b41003c583ba044812ad8ee012bdb61e/h_120%2Cm_limit%2Cq_100%2Ct_1%2Cw_800/sites/670/assets/1524821405_28a150.png 1x, https://cdn.wfolio.ru/w/e688a996a3ff8e10ba8624775702740fd740d94f/h_240%2Cm_limit%2Cq_100%2Ct_1%2Cw_1600/sites/670/assets/1524821405_28a150.png 2x"
                            />
                            </span>
                    </a>
                </h1>
                <ul className="social-links">
                    <li className="item">
                        <a
                            title="https://vk.com/ruslan_polyakov"
                            className="link"
                            target="_blank"
                            href="https://vk.com/ruslan_polyakov">
                            <i className="fab fa-vk"/>
                        </a>
                    </li>
                    <li className="item">
                        <a
                            title="https://www.facebook.com/polyakovfoto"
                            className="link"
                            target="_blank"
                            href="https://www.facebook.com/polyakovfoto">
                            <i className="fab fa-facebook"/>
                        </a>
                    </li>
                    <li className="item">
                        <a
                            title="https://www.instagram.com/ruslan_polyakov_photo/"
                            className="link"
                            target="_blank"
                            href="https://www.instagram.com/ruslan_polyakov_photo/">
                            <i className="fab fa-instagram"/>
                        </a></li>
                    <li className="item">
                        <a
                            title="https://mywed.com/ru/photographer/RuslanPolyakov/"
                            className="link"
                            target="_blank"
                            href="https://mywed.com/ru/photographer/RuslanPolyakov/">
                            <i className="fa fa-mywed"/>
                        </a>
                    </li>
                    <li className="item">
                        <a
                            title="tg://resolve?domain=ruslan_polyakov"
                            className="link"
                            target="_blank"
                            href="tg://resolve?domain=ruslan_polyakov">
                            <i className="fab fa-telegram-plane"/>
                        </a>
                    </li>
                </ul>
            </aside>
        );
    }
}

export default SideBar;