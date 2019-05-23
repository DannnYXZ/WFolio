import React from 'react';
import './Response.css'

class Response extends React.Component {
    render() {
        return (
            <div className='response-item'>
                <span className='from'>
                    {this.props.username}
                </span>
                <div className='content'>
                    {this.props.content}
                </div>
            </div>
        );
    }
}
export default Response;