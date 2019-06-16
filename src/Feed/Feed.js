import React from 'react';
import Figure from '../Figure/Figure';
import './Feed.css';

// Render maps through the array of <Figure /> items and assigns key, src, alt, and description parameters;
class Feed extends React.Component {
    render() {
        return (
            <div className="flex--container">
                {this.props.currentState.map(item => {
                    return <Figure
                        key={item.public_id}
                        src={`https://res.cloudinary.com/free4m/image/upload/v${item.version}/${item.public_id}.png`}
                        alt={item.public_id}
                        description={item.description}
                    />
                })}
            </div>
        );
    }
}

export default Feed;