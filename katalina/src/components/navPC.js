import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { hashHistory } from 'react-router';
import Data from '../data';
class navPC extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            data : this.loadJsonData(),
            actionLink: null,
            map: null,
        };
        this.btn = React.createRef();

    }

    componentDidMount() {
        this.setState({
           map: this.setMap()
        });

    }
    loadJsonData = () => {
        return Data;
    };
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
            if(this.props.setPage != null){
                hashHistory.push(`/productView/${this.state.actionLink}`);
                let params = `${this.state.actionLink}`.split(`/`);
                this.props.setPage(params[0],params[1],params[2],params[3]);
            }
            else{
                hashHistory.push(`/productView/${this.state.actionLink}`);
            }
        }else{
            let regex = new RegExp(this.btn.current.value.toUpperCase());
            let map = this.state.map;
            for(let filed in map) {
                if(regex.test(filed)){
                    if(this.props.setPage != null){
                        hashHistory.push(`/productView/${this.state.map[filed]}`);
                        let params = `${this.state.map[filed]}`.split(`/`);
                        this.props.setPage(params[0],params[1],params[2],params[3]);
                    }else{
                        hashHistory.push(`/productView/${this.state.map[filed]}`);
                    }
                }
            }

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
                <Link to="/#top" className="nav-link-to-top">
                    <img className="img-fluid logo" src={require('../content/logo.png')} alt="Katalina-logo"/>
                </Link>

                <div className="nav-links-wrapper row">
                    <div style={{paddingRight:"20px",marginTop:"-5px"}}>
                        <form method="get" onSubmit={(this.validateThisForm)}>
                            <input ref={this.btn} className="form-control" list="models" placeholder="Szukaj" style={{maxWidth:"175px",borderRadius:"10px"}} onChange={this.showName}/>
                            <datalist id="models" style={{height:"150px"}}>
                                {this.getOptionsElements()}
                            </datalist>
                        </form>
                    </div>
                    <Link to="/#nowosci" className="links scroll">NOWOŚCI</Link>
                    <Link to="/#kolekcje" className="links scroll" >KOLEKCJE</Link>
                    <Link to="/#lookbook" className="links scroll" >LOOKBOOK</Link>
                    <Link to="/#kontakt" className="links scroll" >KONTAKT</Link>
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