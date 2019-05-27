import React from 'react';
import Figure from '../Figure/Figure';
import './Feed.css';

class Feed extends React.Component {

    // Randomizer method for the main feed array, sorts the order of array:
    shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    render() {
        this.shuffle(this.props.img);

        // map() method renders the shuffled array in succession with the <Figure /> template;
        return (
            <div className="flex--container">
                {this.props.img.map(imageItem => {
                    return <Figure
                        key={imageItem.name}
                        src={imageItem.src}
                        alt={imageItem.name}
                        description={imageItem.description}
                    />
                })}
            </div>
        );
    }
}

export default Feed;