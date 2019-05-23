//require('../css/app.css');
import React from 'react';
import ReactDom from 'react-dom';
import Home from './Home'

class App extends React.Component {
    render() {
        return (
            <Home/>
        );
    }
}

ReactDom.render(<Home/>, document.getElementById('root'));