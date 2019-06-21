import React from 'react';
import './Figure.css';

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const images = [
    '//placekitten.com/4000/3000',
    '//placekitten.com/800/1200',
    '//placekitten.com/1500/1500',
];

class Figure extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
        };
    }

    render() {
        const { photoIndex, isOpen } = this.state;

        return (
            <figure className={this.props.category}>
                <img src={this.props.src} alt={this.props.alt} onClick={() => this.setState({ isOpen: true })} />
                <figcaption>{this.props.description}</figcaption>

                <div>
                    {isOpen && (
                        <Lightbox
                            mainSrc={`https://res.cloudinary.com/free4m/image/upload/v${this.props.version}/${this.props.alt}`}
                            // nextSrc={images[(photoIndex + 1) % images.length]}
                            // prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                            onCloseRequest={() => this.setState({ isOpen: false })}
                            onMovePrevRequest={() =>
                                this.setState({
                                    photoIndex: (photoIndex + images.length - 1) % images.length,
                                })
                            }
                            onMoveNextRequest={() =>
                                this.setState({
                                    photoIndex: (photoIndex + 1) % images.length,
                                })
                            }
                        />
                    )}
                </div>
            </figure>
        );
    }
}

export default Figure;
