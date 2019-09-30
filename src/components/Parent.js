import React from 'react';
import ToggleBox from './ToggleBox';
import CountBox from './CountBox';

class Parent extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [
                'LIKE',
                'DISLIKE',
                'LIKE',
                'LIKE'
            ]
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle(index) {
        let item = this.state.items[index];
        let items = this.state.items;
        items[index] = item === "LIKE" ? "DISLIKE" : "LIKE"
        this.setState({items: items});
    }

    render() {
        return (
            <div>
                <ToggleBox toggle={this.toggle} items={this.state.items} />
                <br />
                <CountBox items={this.state.items} />
            </div>
        );
    }
}

export default Parent;
