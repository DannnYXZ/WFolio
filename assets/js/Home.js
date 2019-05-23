import React from 'react';
//import './components/News.css'
import Template from './components/Template.js'
import Album from "./components/Album";
import Albums from "./components/Albums";
import axios from 'axios'
import ReactDom from "react-dom";

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

ReactDom.render(<Home/>, document.getElementById('root'));
