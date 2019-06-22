import React from 'react';
import './Figure.css';

// Lightbox package import:
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';


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

        // Sets images to array of img src="" strings composed of most current assets in props;
        const images = this.props.assets.map(item => `https://res.cloudinary.com/free4m/image/upload/v${item.version}/${item.public_id}`);

        // Create corresponding descriptions array to match above images array;
        const descriptions = this.props.assets.map(item => item.description);

        // onClick handler sets the state to opened modal [isOpen],
        // as the same time sets photoIndex to the findIndex that is returned with the corresponding pucblic_id item,
        // then opens the modal <div> if isOpen is true;
        return (
            <figure className={this.props.category}>
                <img src={this.props.src} alt={this.props.alt} onClick={() => this.setState({ isOpen: true, photoIndex: this.props.assets.findIndex(item => item.public_id === this.props.alt) })
                } />
                <figcaption>{this.props.description}</figcaption>

                <div id="description">
                    {isOpen && (
                        <Lightbox
                            mainSrc={images[photoIndex]}
                            imageCaption={<div>{descriptions[photoIndex]}</div>}
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
