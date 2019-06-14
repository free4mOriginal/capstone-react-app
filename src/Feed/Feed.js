import React from 'react';
import Figure from '../Figure/Figure';
import './Feed.css';

class Feed extends React.Component {

    // Randomizer method for the main feed array, sorts the order of array:
    shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    render() {
        this.shuffle(this.props.currentState);
        const srcURL = 'https://res.cloudinary.com/free4m/image/upload/v';

        // map() method renders the shuffled array in succession with the <Figure /> template;
        return (
            <div className="flex--container">
                {console.log('Feed current state', this.props.currentState)}
                {/* <img src={this.props.currentState[0].public_id} alt="test" /> */}
                {this.props.currentState.map(item => {
                    return <Figure
                        key={item.public_id}
                        src={`${srcURL}/${item.version}/${item.public_id}`}
                        alt={item.public_id}
                        description={item.description}
                    />
                })}
            </div>
        );
    }
}

export default Feed;