import React from 'react';
import './ReplySender.css'

class ReplySender extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='reply-sender'>
                <form action='post-comment' method='post'>
                    <textarea class="message" name="message" placeholder="Message">
                    </textarea>
                    <button className='btn-send' type="submit" formMethod="post">SEND</button>
                </form>
            </div>
        );
    }
}

export default ReplySender;