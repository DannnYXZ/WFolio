import React from 'react';
import './Home.css'
import Template from '../Template.js'
import News from "../News";
import Album from "../Album";
import Albums from "../Albums";

class Home extends React.Component {
    componentDidMount() {
        // TODO fetch data
    }

    render() {
        const content =
            <Albums>
                <Album title='KEK'/>
                <Album title='KEK'/>
                <Album title='KEK'/>
                <Album title='KEK'/>
                <Album title='KEK'/>
                <Album title='KEK'/>
                <Album title='KEK'/>
                <Album title='KEK'/>
                <Album title='KEK'/>
                <Album title='KEK'/>
                <Album title='KEK'/>
                <Album title='KEK'/>
                <Album title='KEK'/>
                <Album title='KEK'/>
            </Albums>;
        return (
            <Template>
                {content}
            </Template>
        );
    }
}

export default Home;