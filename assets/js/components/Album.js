import React from 'react';
import './Album.css'

class Album extends React.Component {
    render() {
        return (
            <div className="item" id="aleks-i-lena">
                <a className="link" href={this.props.path}>
                    <div className="lazy-image js-lazy-image  -loaded"
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
                             src={this.props.src}
                        />
                    </div>
                    <div className="title"><span>{this.props.title}</span></div>
                </a>
            </div>
        );
    }
}

export default Album;