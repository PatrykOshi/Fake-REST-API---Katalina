import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';
import Navi from './nav';

class App extends Component {
    constructor(){
        super();
        this.state = {
            width: window.innerWidth
        }
    }

    componentDidMount(){
        this.handleRestizeEvent();
    }

    handleRestizeEvent = () => {
        window.onresize = () => {
            this.setState({
                width: window.innerWidth
            });
        };
    };

    render(){
        return(
            <div>
                <Navi currentWidth={this.state.width} />
            </div>
        );
    }
}

ReactDOM.render(<App />,document.getElementById('root'));
