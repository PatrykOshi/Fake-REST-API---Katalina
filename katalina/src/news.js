import React from 'react';

class News extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="container">
                <img className="img-fluid" src={require(`${this.props.data[0].news[0][5][1][5].img3}`)}/>
            </div>
        );
    }
}

export default News;