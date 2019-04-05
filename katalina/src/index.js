import React from 'react';
import ReactDOM from 'react-dom';
import Navi from './nav';

class App extends React.Component {
    render = () => {
        return(
            <div>
                <Navi />
                <h1>still works</h1>
            </div>
        );
    }
}

ReactDOM.render(<App />,document.getElementById('root'));
