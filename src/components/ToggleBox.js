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

export default ToggleBox;
