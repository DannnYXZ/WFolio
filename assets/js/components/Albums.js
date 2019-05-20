import React from 'react';
import './Albums.css'

class Albums extends React.Component {
    render() {
        return (
            <div className="listing js-listing" data-format="square">
                {this.props.children}
            </div>
        );
    }
}

export default Albums;
