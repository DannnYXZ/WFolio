import React from 'react';
import axios from 'axios/index'
import './Feedback.css'
import Template from './components/Template.js'
import Response from './components/Response.js';
import ReactDom from "react-dom";

class Feedback extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
    }

    componentDidMount() {
        axios.get('/feedback')
            .then(response => {
                console.log(response);
                this.setState({
                    comments: response.data
                });
            });
    }

    render() {
        const comments = this.state.images.map(e =>
            <Response
                username={e.username}
                content={e.content}
            />
        );
        const content = (
            <Feedback>
                {comments}
            </Feedback>
            //< /MessageSender>
        );
        return (
            <Template>
                {content}
            </Template>
        );
    }
}
ReactDom.render(<Feedback/>, document.getElementById('root'));
//export default Feedback;