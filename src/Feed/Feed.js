import React from 'react';
import Figure from '../Figure/Figure';


// this .map() method calls on <Figure> Component every time
// to render the individual image items in succession

class Feed extends React.Component {
    render() {
        return (
            <div className="flex--container">
                {this.props.img.map(imageItem => {                    
                    return <Figure
                        alt={imageItem.name}
                        src={imageItem.src}
                        description={imageItem.description}
                    />
                })}
            </div>
        );
    }
}

export default Feed;