import React from 'react';
import { Link } from 'react-router-dom';

class navPC extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            data: JSON.parse(JSON.stringify(require('../data.json'))),
            actionLink: null,
            map: null
        }
    }

    componentDidMount() {
        this.setState({
           map: this.setMap()
        });

    }
    setMap = () =>{
        let map = {};
        let data = this.state.data;
        let sh;
        let model;
        let color;
        for(let i = 1; i<data.length;i++){ //kolekcje
            for(let j = 0; j<data[i].news.length; j++){ // nowosci
                for(let k = 1; k<data[i].news[j].length; k++){ // modele
                    for(let z = 1; z < data[i].news[j][k].length; z++){
                        for(let x = 0; x < data[i].news[j][k][z].length; x++){
                            sh = `${data[i].name}`;
                            model=`${data[i].news[j][k][0]}`;
                            color = `${data[i].news[j][k][z][x].color}`;
                            map[`${sh} ${model} ${color}`] =`${i}/${j}/${k}/${x}`;
                        }
                    }
                }
            }
        }
        return map;
    };
    getOptionsElements = () =>{
        let jsx = [];
        let data = this.state.data;
        let map = {};
        let sh;
        let model;
        let color;
        let tmp=0;
        for(let i = 1; i<data.length;i++){ //kolekcje
            for(let j = 0; j<data[i].news.length; j++){ // nowosci
                for(let k = 1; k<data[i].news[j].length; k++){ // modele
                    for(let z = 1; z < data[i].news[j][k].length; z++){
                        for(let x = 0; x < data[i].news[j][k][z].length; x++){
                            tmp++;
                            sh = `${data[i].name}`;
                            model=`${data[i].news[j][k][0]}`;
                            color = `${data[i].news[j][k][z][x].color}`;
                            map[`${sh} ${model} ${color}`] =`${i}/${j}/${k}/${x}`;
                            jsx.push(
                                <option value={`${sh} ${model} ${color}`} key={`${tmp}indexx`}>
                                </option>
                            );
                        }
                    }
                }
            }
        }

        return(
            jsx
        );
    };

    validateThisForm = (e) => {
        e.preventDefault();

        if(this.state.actionLink != null){
            window.location.replace(`/productView/${this.state.actionLink}`);
        }
    };

    showName = (e) => {
        this.setState({
            actionLink: this.state.map[e.target.value]
        });
    };

    render(){
        return (
            <nav className="responsive-nav" style={{
                zIndex:"1"
            }}>
                <a className="nav-link-to-top" href="/#top">
                    <img className="img-fluid logo" src={require('../content/logo.png')} alt="Katalina-logo"/>
                </a>

                <div className="nav-links-wrapper row">
                    <div style={{paddingRight:"20px",marginTop:"-5px"}}>
                        <form method="get" onSubmit={(this.validateThisForm)}>
                            <input className="form-control" list="models" placeholder="Szukaj" style={{maxWidth:"175px",borderRadius:"10px"}} onChange={this.showName}/>
                            <datalist id="models" style={{height:"150px"}}>
                                {this.getOptionsElements()}
                            </datalist>
                        </form>
                    </div>
                    <a className="links scroll" href="/#nowosci">NOWOŚCI</a>
                    <a className="links scroll" href="/#kolekcje">KOLEKCJE</a>
                    <a className="links scroll" href="/#lookbook">LOOKBOOK</a>
                    <a className="links scroll" href="/#kontakt">KONTAKT</a>
                    <Link to={{
                        pathname:"/gallery",
                        test: "as"
                    }}
                          className="links">
                        OFERTA
                    </Link>
                    <span className="nav-space"> </span>
                    <a className="top-link-social" href="https://www.facebook.com/katalinagroup/">
                        <i className="fab fa-facebook"> </i>
                    </a>
                    <a className="top-link-social" href="https://www.instagram.com/katalinaoprawyokularowe/">
                        <i className="fab fa-instagram"> </i>
                    </a>
                </div>
            </nav>
        );
    }
}

export default navPC;