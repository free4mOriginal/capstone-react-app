import React from 'react';
import Figure from '../Figure/Figure';
import './Feed.css';

class Feed extends React.Component {

    // Randomizer method for the main feed array, sorts the order of array:
    // shuffle(array) {
    //     return array.sort(() => Math.random() - 0.5);
    // }

    // https://res.cloudinary.com/free4m/image/upload/v/1559764530/lava-side_etsn5j
    // https://res.cloudinary.com/free4m/image/upload/v1559764530/lava-side_etsn5j.png
    // https://res.cloudinary.com/free4m/image/upload/v/1559764530/lava-side_etsn5j.png  
    
    render() {
        // this.shuffle(this.props.currentState);
        const srcURL = 'https://res.cloudinary.com/free4m/image/upload/v';

        return (
            <div className="flex--container">
                {this.props.currentState.map(item => {
                    console.log(item);
                    return <Figure
                        key={item.public_id}
                        src={`${srcURL}${item.version}/${item.public_id}.png`}
                        alt={item.public_id}
                        description={item.description}
                    />
                })}
            </div>
        );
    }
}

export default Feed;