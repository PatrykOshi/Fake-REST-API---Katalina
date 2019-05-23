import React from 'react';
import Nav from './components/nav';
import './css/productView/productView.css';

class productView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data : JSON.parse(JSON.stringify(require('./data.json'))),
            col : props.match.params.col,
            news : props.match.params.news,
            model :props.match.params.model,
            color :props.match.params.color,
            width: window.innerWidth
        };
    }


    componentDidMount(){
        window.scrollTo(0, 0);
        this.handleResizeEvent();
    }

    switchImgSrc = (e) =>{
        let main = document.getElementById("myimage");
        let fr1 = document.getElementById("fr1");
        let fr2 = document.getElementById("fr2");
        let MainSrc = main.src;
        if(e.target.id === "fr1"){
            main.src = fr1.src;
            fr1.src = MainSrc;
        }
        else{
            main.src = fr2.src;
            fr2.src = MainSrc;
        }

        let element = document.getElementById("len");
        element.parentNode.removeChild(element);
        this.imageZoom("myimage","myresult");

    };

    loadLens = () => {
        try{
            let element = document.getElementById("len");
            element.parentNode.removeChild(element);
            this.imageZoom("myimage","myresult");
        }
        catch (e) {
            this.imageZoom("myimage","myresult");
        }
    };

    imageZoom = (imgID, resultID) => {
        let img, lens, result, cx, cy;
        img = document.getElementById(imgID);
        result = document.getElementById(resultID);
        lens = document.createElement("DIV");
        lens.setAttribute("class", "img-zoom-lens");
        lens.setAttribute("id", "len");
        img.parentElement.insertBefore(lens, img);
        cx = result.offsetWidth / lens.offsetWidth;
        cy = result.offsetHeight / lens.offsetHeight;
        result.style.backgroundImage = "url('" + img.src + "')";
        result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
        lens.addEventListener("mousemove", moveLens);
        img.addEventListener("mousemove", moveLens);
        lens.addEventListener("touchmove", moveLens);
        img.addEventListener("touchmove", moveLens);
        function moveLens(e) {
            let pos, x, y;
            e.preventDefault();
            pos = getCursorPos(e);
            x = pos.x - (lens.offsetWidth / 2);
            y = pos.y - (lens.offsetHeight / 2);
            if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
            if (x < 0) {x = 0;}
            if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
            if (y < 0) {y = 0;}
            lens.style.left = x + "px";
            lens.style.top = y + "px";
            result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
        }
        function getCursorPos(e) {
            let a, x = 0, y = 0;
            e = e || window.event;
            a = img.getBoundingClientRect();
            x = e.pageX - a.left;
            y = e.pageY - a.top;
            x = x - window.pageXOffset;
            y = y - window.pageYOffset;
            return {x : x, y : y};
        }
    };


    handleResizeEvent = () => {
        window.addEventListener('resize', () => {
            this.setState({
                width: window.innerWidth
            });
        });
    };

    getContent = () =>{
        try {
            return(
                <div className="container" onLoad={this.loadLens}>
                    <div className="row" >
                        <div className="container" style={{marginTop:"250px"}}>
                            <div className="row">
                                <div className="col-6 col-md-3">
                                    <img className="img-fluid" onClick={this.switchImgSrc} id="fr1" src={require(`${this.state.data[this.state.col].news[this.state.news][this.state.model][1][this.state.color].img1}`)} alt=""/>
                                </div>
                                <div className="col-6 col-md-3">
                                    <img className="img-fluid" onClick={this.switchImgSrc} id="fr2" src={require(`${this.state.data[this.state.col].news[this.state.news][this.state.model][1][this.state.color].img3}`)} alt=""/>
                                </div>
                                <div className="col-12 col-md-6 hideIT">
                                    <table className="table table-striped">
                                        <tbody>
                                        <tr>
                                            <td>Marka:</td>
                                            <td>{this.state.data[this.state.col].name}</td>
                                        </tr>
                                        <tr>
                                            <td>Model:</td>
                                            <td>{this.state.data[this.state.col].news[this.state.news][this.state.model][0]}</td>
                                        </tr>
                                        <tr>
                                            <td>Kolor:</td>
                                            <td>{this.state.data[this.state.col].news[this.state.news][this.state.model][1][this.state.color].color}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-6 img-zoom-container">
                                    <img className="img-fluid" id="myimage" src={require(`${this.state.data[this.state.col].news[this.state.news][this.state.model][1][this.state.color].img2}`)} alt=""/>
                                </div>
                                <div className="col-12 col-md-6 img-zoom-result" id="myresult">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } catch (error) {
            return(
                <p>
                    error :(
                </p>
            );
        }
    };

    render(){
        return(
            <div>
                <Nav currentWidth={this.state.width}/>
                {this.getContent()}
            </div>
        );
    }
}


export default productView;