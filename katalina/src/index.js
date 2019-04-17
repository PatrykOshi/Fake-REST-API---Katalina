import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';
import Navi from './components/nav';
import ModelBackground from './components/ModelBackground';

class App extends Component {
    constructor() {
        super();
        this.state = {
            width: window.innerWidth
        }
    }

    componentDidMount() {
        this.handleResizeEvent();
    }

    handleResizeEvent = () => {
        window.addEventListener('resize', () => {
            this.setState({
                width: window.innerWidth
            });
        });
    };

    render() {
        return (
            <div>
                <Navi currentWidth={this.state.width}/>
                <ModelBackground />
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
