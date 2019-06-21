import React from 'react';
import './Figure.css';

// Lightbox package import:
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

    // Populates local this.state.images array with unique src attributes for each image constructed out of the assets array from passed props:
    populateLocalStateImages() {
        this.props.assets.forEach((item) => {
            this.state.images.push(`https://res.cloudinary.com/free4m/image/upload/v${item.version}/${item.public_id}`)
        });
    }

    // Instantiating the populateLocalStateImages method when all components mount
    componentDidMount() {
        this.populateLocalStateImages();
    }

    // Compares passed in public_id from the clicked item to the public_ids in the assets array, returns index number of matched item;
    photoIndexSet(id) {
        return this.props.assets.findIndex(item => item.public_id === id);
    }

    render() {
        const { images, photoIndex, isOpen } = this.state;

        // onClick handler sets the state to opened modal [isOpen],
        // and sets the photoIndex to the index of the clicked image;
        // then opens the modal <div> if isOpen is true;
        return (
            <figure className={this.props.category}>
                <img src={this.props.src} alt={this.props.alt} onClick={() => this.setState({ isOpen: true, photoIndex: this.photoIndexSet(this.props.alt) })} />
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
