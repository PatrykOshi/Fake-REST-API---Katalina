import React from 'react';


class productView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data : JSON.parse(JSON.stringify(require('./data.json'))),
            col : props.match.params.col,
            news : props.match.params.news,
            model :props.match.params.model,
        }
    }


    componentDidMount(){
        window.scrollTo(0, 0)
    }

    getContent = () =>{
        try {
            return(
                <div>
                    <img className="img-fluid" src={require(`${this.state.data[this.state.col].news[this.state.news][this.state.model][1][0].img2}`)} alt=""/>
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
                {this.getContent()}
            </div>
        );
    }
};


export default productView;