import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';
import Gallery from './Gallery';
import productView from './productView';
import Navi from './components/nav';
import ModelBackground from './components/ModelBackground';
import AboutUs from './components/AboutUs';
import Separator from './components/Separator';
import Collections from './components/Collections';
import Parallax from './components/Parallax';
import Slider from './components/Slider';
import Contact from './components/Contact';
import News from './news';
import ParallaxImg1 from './content/parallax/para.jpg';
import ParallaxImg2 from './content/parallax/para2.jpg';

class App extends Component {
    constructor() {
        super();
        this.state = {
            width: window.innerWidth,
        };
    }


    componentDidMount() {
        this.handleResizeEvent();
        this.loadJsonData();
    }

    loadJsonData = () => {
        return JSON.parse(JSON.stringify(require('./data.json')));
    };

    handleResizeEvent = () => {
        window.addEventListener('resize', () => {
            this.setState({
                width: window.innerWidth
            });
        });
    };

    mainPage = () => {
        return (
            <div>
                <Navi currentWidth={this.state.width}/>
                <ModelBackground/>
                <Separator title={'O NAS'} setId={'onas'} devider={0}/>
                <AboutUs currentWidth={this.state.width}/>
                <Separator title={'NOWOŚCI'} setId={'nowosci'} devider={1}/>
                <News data={this.loadJsonData()}/>
                <Parallax imgSrc={ParallaxImg1}/>
                <Separator title={'KOLEKCJE'} setId={'kolekcje'} devider={2}/>
                <Collections/>
                <Parallax imgSrc={ParallaxImg2}/>
                <Separator title={'LOOKBOOK'} setId={'lookbook'} devider={0}/>
                <Slider/>
                <Separator title={'KONTAKT'} setId={'kontakt'} devider={2}/>
                <Contact/>
            </div>
        );
    };

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={this.mainPage}/>
                    <Route path="/gallery" component={Gallery}/>
                    <Route path="/productView/:col/:news/:model" component={productView}/>
                </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
