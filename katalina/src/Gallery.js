import React from 'react';
import Nav from './components/nav';
import Footer from './components/footer';
import SideSection from './components/sideSection';
import GalleryComponent from './galleryComponent';
import './css/gallery.css'

class Gallery extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: this.loadJsonData(),
            colection: parseInt(props.match.params.col != null ? props.match.params.col : null),
            news: parseInt(props.match.params.news != null ? props.match.params.news : null),
            width: window.innerWidth
        };
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
    loadJsonData = () => {
        return JSON.parse(JSON.stringify(require('./data.json')));
    };

    getContent = () =>{
        let data;
        let jsx = [];
        if(!isNaN(this.state.colection)){
            if(!isNaN(this.state.news)){
                data = this.state.data[this.state.colection].news[this.state.news];
                for(let i = 1; i < data.length;i++){
                    for(let j = 1; j < data[i].length; j++){
                        for(let x = 0; x < data[i][j].length; x++){
                            console.log(data[i][j]);
                            jsx.push(
                                <GalleryComponent
                                    key={`${i}${j}${x}`}
                                    valueForKey={`${i}${j}${x}`}
                                    img={data[i][j][x].img2}
                                    name={data[i][0]}
                                    color={data[i][j][x].color}
                                    colLink={this.state.colection}
                                    newsLink={this.state.news}
                                    modeLink={i}
                                    colorLink={x}
                                />
                            )
                        }
                    }
                }
            }
            else{
                data = this.state.data[this.state.colection];
            }

        }
        return(
            jsx
        );
    };

    render(){
        return (
            <div>
                <Nav currentWidth={this.state.width} />
                <div className="spacer">

                </div>
                <div className="container-fluid">
                    <SideSection width={this.state.width} data={this.state.data}/>
                    <div className="row">
                        <div className="col-0 col-md-3"> </div>
                        <div className="col-12 col-md-9">
                            <div className="row">
                                {this.getContent()}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer noDevider={true}/>
            </div>
        );
    }

}

export default Gallery;