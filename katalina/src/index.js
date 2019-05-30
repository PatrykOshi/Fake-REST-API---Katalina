import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route} from 'react-router-dom';
import Data from './data';
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
import Footer from './components/footer';
import ParallaxImg1 from './content/parallax/para.jpg';
import ParallaxImg2 from './content/parallax/para2.jpg';


class App extends Component {
    constructor() {
        super();
        this.state = {
            width: window.innerWidth
        };
        this.newsContent = React.createRef();
        this.spinner = React.createRef();
    }


    componentDidMount() {
        this.handleResizeEvent();
        this.loadJsonData();
    }
    handleLoad = () =>{
        let interval = setInterval(() =>{
            if(document.readyState === 'complete') {
                clearInterval(interval);
                try{
                    this.spinner.current.style.display = "none";
                    this.newsContent.current.style.display = "block";
                }catch (e) {

                }
            }
        }, 100);
    };


    loadJsonData = () => {
        return Data;
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
                <div>
                    <div>
                        <div className="container" ref={this.spinner} >
                            <div className="row text-center">
                                <i className="fa fa-spinner fa-spin col" style={{fontSize:"100px", marginTop:"15px", marginBottom:"15px"}}> </i>
                            </div>
                        </div>
                    </div>
                    <div ref={this.newsContent} style={{display:"none"}}>
                        <div className="fadeIn animated" onLoad={this.handleLoad}>
                            <News data={this.loadJsonData()}/>
                        </div>
                    </div>
                </div>
                <Parallax imgSrc={ParallaxImg1}/>
                <Separator title={'KOLEKCJE'} setId={'kolekcje'} devider={2}/>
                <Collections/>
                <Parallax imgSrc={ParallaxImg2}/>
                <Separator title={'LOOKBOOK'} setId={'lookbook'} devider={0}/>
                <Slider/>
                <Separator title={'KONTAKT'} setId={'kontakt'} devider={2}/>
                <Contact/>
                <Footer />
            </div>
        );
    };

    render() {
        return (
            <HashRouter>
                <div>
                    <Route path="/" exact component={this.mainPage}/>
                    <Route path="/gallery/:col?/:news?" component={Gallery}/>
                    <Route path="/productView/:col/:news/:model/:color" component={productView}/>
                </div>
            </HashRouter>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
