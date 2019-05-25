import React from 'react';
import Figure from '../Figure/Figure';

class Feed extends React.Component {
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
            const ran12 = Math.floor(Math.random()*12);
            const ran100 = Math.floor(Math.random()*100);

            this.props.img.push({
                name: names[ran12],
                src: `https://picsum.photos/200/?random${ran100}`,
                description: descriptions[ran12],
                id: names[i] + ran100,
            });
        };
    }

    render() {
        this.createRandomImages();

        // this .map() method calls on <Figure> Component every time
        // to render the individual image items in succession
        return (
            <div className="flex--container">
                {this.props.img.map(imageItem => {
                    return <Figure
                        key={imageItem.id}
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