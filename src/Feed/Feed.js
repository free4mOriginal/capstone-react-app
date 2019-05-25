import React from 'react';
import Figure from '../Figure/Figure';

class Feed extends React.Component {
    constructor(props) {
        super(props);
        this.createRandomImages = this.createRandomImages.bind(this);
    }

    createRandomImages() {
        const names = ['Biruza', 'Meditation', 'Dot', 'Square', 'Antidote', 'Lorem', 'Ipsum', 'Omega', 'Alpha', 'Cricket', 'Chain', 'Link'];
        const descriptions = [
            'Biruza ring, sterling silver, tourquoise',
            'Dot meditation ring, sterling silver',
            'Sculpted pet ring',
            'Imprint Thumb keepsake ring',
            'Garnet necklace, sterling silver',
            'High carat tourmaline round ring',
            'Lorem ipsum dolor sit',
            'Amet consectetur adipisicing elit',
            'Aperiam in accusamus eius doloribus',
            'Voluptate placeat? Dolore corrupti rerum',
            'Non molestiae dolorum delectus aliquam',
            'reprehenderit est tempora ipsa enim ut?',
        ];

        for (let i = 0; i < 12; i++) {
            const ran = Math.floor(Math.random()*100);

            this.props.img.push({
                name: names[ran],
                src: `https://picsum.photos/200/?random${ran}`,
                description: descriptions[ran],
                id: names[i] + ran,
            });
        };
    }

    render() {
        this.createRandomImages();
        console.log(this.props.img);

        // this .map() method calls on <Figure> Component every time
        // to render the individual image items in succession
        return (
            <div className="flex--container">
                {this.props.img.map(imageItem => {
                    return <Figure
                        key={imageItem.id}
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