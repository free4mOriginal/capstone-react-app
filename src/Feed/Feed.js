import React from 'react';
import Figure from '../Figure/Figure';
import './Feed.css';

class Feed extends React.Component {

    // Randomizer method for the main feed array, sorts the order of array:
    // shuffle(array) {
    //     return array.sort(() => Math.random() - 0.5);
    // } 
    
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