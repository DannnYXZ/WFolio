import React from 'react';
import './Home.css'
import Template from '../Template.js'
import Album from "../Album";
import Albums from "../Albums";
import axios from 'axios'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: []
        }
    }

    componentDidMount() {
        axios.get('/wedding-albums')
            .then(response => {
                const images = response.data;
                //console.log(images);
                this.setState({
                    images: images
                })
            });

        axios.get('/ke')
            .then(response => {
                const images = response.data;
                //console.log(images);
                this.setState({
                    images: images
                })
            });
    }

    render() {
        const albums = this.state.images.map(e =>
            <Album
                title={e.title}
                src={'images/albums/' + e.logo}
                path={e.path}
            />
        );
        const content =
            <Albums>
                {albums}
            </Albums>;
        return (
            <Template>
                {content}
            </Template>
        );
    }
}

export default Home;