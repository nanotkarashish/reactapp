import React from 'react';

class Toggle extends React.Component {
    render() {
        return(
            <button onClick={() => this.props.toggle(this.props.id)}>{this.props.id}. {this.props.text}</button>
        ) 
    }
}

export default Toggle;
