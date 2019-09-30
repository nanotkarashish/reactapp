import React from 'react';

class Count extends React.Component {
    render() {
        const { count } = this.props;
        return (
            <div>
                {count}
            </div>
        );
    }
}

export default Count;
