require('../css/app.css');
import React from 'react';
import ReactDom from 'react-dom';
import Home from './components/screens/Home'

class App extends React.Component {
    render() {
        return (
            <Home/>
        );
    }
}

ReactDom.render(<App/>, document.getElementById('root'));