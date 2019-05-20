import React from 'react';
import './Album.css'

class Album extends React.Component {
    render() {
        return (
            <div className="item" id="aleks-i-lena">
                <a className="link" href="/aleks-i-lena">
                    <div className="lazy-image js-lazy-image  -loaded" //data-width="3840" data-height="2560"
                         data-aspect="1">
                        <canvas
                            className="placeholder"
                            width={2560}
                            height={2560}
                            style={{backgroundColor: '#89847c'}}
                        >
                        </canvas>
                        <img className="lazyautosizes lazyloaded" data-sizes="auto"
                            //data-src={this.props.uri}
                             src="https://cdn.wfolio.ru/w/ee832de10971931a0c385352878a28133e0eebc9/a_1%2Cm_fill%2Cw_480/sites/670/assets/1552724137_4a44db.jpg"
                        />
                    </div>
                    <div className="title"><span>{this.props.title}</span></div>
                </a>
            </div>
        );
    }
}

export default Album;