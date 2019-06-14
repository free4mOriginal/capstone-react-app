import React from 'react';
import './Figure.css';

// Render individual <figure> items for the main feed:
class Figure extends React.Component {
    render() {
        return (
            <figure className={this.props.category}>
                <img src={this.props.src} alt={this.props.alt} id={this.props.alt} />
                <figcaption>{this.props.description}</figcaption>
            </figure>
        );
    }
};

export default Figure;

/*
<div className="TrackList">
{this.props.tracks.map(track => {
  return <Track
    key={track.id}
    track={track}
    onAdd={this.props.onAdd}
    onRemove={this.props.onRemove}
    isRemoval={this.props.isRemoval}
    />
})}
</div> */