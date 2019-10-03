import React from 'react';
import Toggle from './Toggle';

class ToggleBox extends React.Component {
    render() {
        const listItems = this.props.items.map((item, index) => 
            (<Toggle toggle={this.props.toggle} key={index} id={index} text={item} />)
        );
        
        return (
            <div>
                {listItems}
            </div>
        );
    }
}

ToggleBox.defaultProps = {
    items: [
        'LIKE',
        'DISLIKE',
        'LIKE',
        'LIKE'
    ],
    toggle: (index) => {
        let item = this.state.items[index];
        let items = this.state.items;
        items[index] = item === "LIKE" ? "DISLIKE" : "LIKE"
        this.setState({items: items});
    }
}

export default ToggleBox;
