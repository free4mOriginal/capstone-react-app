import React from 'react';
import './Figure.css';

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';


class Figure extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            photoIndex: 0,
            isOpen: false,
        };
    }

    populateLocalStateImages() {
        this.props.assets.forEach((item) => {
            this.state.images.push(`https://res.cloudinary.com/free4m/image/upload/v${item.version}/${item.public_id}`)
        });
    }

    componentDidMount() {
        this.populateLocalStateImages();
    }

    render() {
        const { images, photoIndex, isOpen } = this.state;

        return (
            <figure className={this.props.category}>
                <img src={this.props.src} alt={this.props.alt} onClick={() => this.setState({ isOpen: true })} />
                <figcaption>{this.props.description}</figcaption>

                <div>
                    {isOpen && (
                        <Lightbox
                            mainSrc={images[photoIndex]}
                            nextSrc={images[(photoIndex + 1) % images.length]}
                            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                            onCloseRequest={() => this.setState({ isOpen: false })}
                            onMovePrevRequest={() =>
                                this.setState({
                                    photoIndex: (photoIndex + images.length - 1) % images.length,
                                })
                            }
                            onMoveNextRequest={() =>
                                this.setState({
                                    photoIndex: (photoIndex + 1) % this.state.images.length,
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
