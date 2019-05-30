import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { hashHistory } from 'react-router';

class MobileNav extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: JSON.parse(JSON.stringify(require('../data.json'))),
            actionLink: null,
            map: null,
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
            if(this.props.setPage != null){
                hashHistory.push(`/productView/${this.state.actionLink}`);
                let params = `${this.state.actionLink}`.split(`/`);
                this.props.setPage(params[0],params[1],params[2],params[3]);
            }
            else{
                hashHistory.push(`/productView/${this.state.actionLink}`);
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
            <nav className="mobileNavBar">
                <div>
                    <Link to="/#top" className="nav-link-to-top">
                        <img className="img-fluid logo" src={require('../content/logo.png')} alt="Katalina-logo"/>
                    </Link>
                </div>
                <button className="navbar-toggler" data-toggle="collapse" href="#navBarCallapse" aria-expanded="true" aria-controls="navBarCallapse">
                    <i className="fas fa-bars" style={{color: 'white'}}> </i>
                </button>
                <div className="collapse mobileNavContent" id="navBarCallapse">
                    <ul>
                        <li style={{marginTop:"20px"}}>
                            <form method="get" onSubmit={(this.validateThisForm)}>
                                <div className="container-fluid">
                                    <div className="row">
                                        <input className="form-control col" list="models" placeholder="Szukaj" style={{maxWidth:"175px"}} onChange={this.showName}/>

                                        <button type="submit"  className="btn btn-primary">Szukaj</button>
                                    </div>
                                </div>
                                <datalist id="models" style={{height:"150px"}}>
                                    {this.getOptionsElements()}
                                </datalist>

                            </form>
                        </li>
                        <li className="listOfLinksOnMobile">
                            <Link to="/#nowosci" className="links scroll">NOWOŚCI</Link>
                        </li>
                        <li className="listOfLinksOnMobile">
                            <Link to="/#kolekcje" className="links scroll" >KOLEKCJE</Link>
                        </li>
                        <li className="listOfLinksOnMobile">
                            <Link to="/#lookbook" className="links scroll" >LOOKBOOK</Link>
                        </li>
                        <li className="listOfLinksOnMobile">
                            <Link to="/#kontakt" className="links scroll" >KONTAKT</Link>
                        </li>
                        <li className="listOfLinksOnMobile">
                            <Link to={{
                                pathname:"/gallery",
                                test: "as"
                            }}
                                  className="links">
                                OFERTA
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>);
    }
}

export default MobileNav;