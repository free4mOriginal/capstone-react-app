import React from 'react';
import './Credits.css';

// Renders the Credits section with the Back to Top functionality;
class Credits extends React.Component {
    render() {
        return (
            <div className="credits">
                <p><a href="#top">Back to top</a></p>
                <span>&copy; 2024 Zhana Liner</span>
            </div>
        );
    }
}

export default Credits;
