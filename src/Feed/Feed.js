import React from 'react';
import Figure from '../Figure/Figure';
import './Feed.css';

class Feed extends React.Component {

    // Randomizer method for the main feed array
    // sorts the order of array by setting functions to positive or negative value;
    shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    render() {
        this.shuffle(this.props.img);

        // this .map() method calls on <Figure> Component every time
        // to render the individual image items in succession:
        return (
            <div className="flex--container">
                {this.props.img.map(imageItem => {
                    return <Figure
                        key={imageItem.name}
                        src={imageItem.src}
                        alt={imageItem.name}
                        description={imageItem.description}
                        category={imageItem.category}
                    />
                })}
            </div>
        );
    }
}

export default Feed;