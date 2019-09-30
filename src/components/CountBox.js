import React from 'react';
import Count from './Count';

class CountBox extends React.Component {
    render() {
        const likes = this.props.items.filter(item => item === 'LIKE');
        const likesCount = likes.length;
        const dislikes = this.props.items.filter(item => item === 'DISLIKE');
        const dislikesCount = dislikes.length;

        return (
            <div>
                LIKE <Count count={likesCount} />
                <br />
                DISLIKE <Count count={dislikesCount} />
            </div>
        );
    }
}

export default CountBox;
