import React from 'react';
import axios from 'axios/index'
import './Feedback.css'
import Template from './components/Template.js'
import Response from './components/Response.js';
import ReactDom from "react-dom";
import ReplySender from "./components/ReplySender";

class Feedback extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
    }

    componentDidMount() {
        axios.get('/feedback-messages')
            .then(response => {
                console.log(response);
                this.setState({
                    comments: response.data.comments ? response.data.comments : []
                });
            });
    }

    render() {
        let content;
        content = (
            <ReplySender/>
        );
        /*
        const comments = this.state.comments.map(e =>
            <Response
                username={e.username}
                content={e.content}
            />
        );

        console.log('kek');
        const content = (
            <Feedback>
                {null}
            </Feedback>
            //< /MessageSender>
        );

    }
    */
        return (
            <Template>
                {content}
            </Template>
        );
    }
}

ReactDom.render(<Feedback/>, document.getElementById('root'));
//export default Feedback;