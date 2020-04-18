import React from 'react';
import Content from './Content';

// MARK: Movies component - it uses Content component as own
class Movies extends React.Component {
    render() {
        return (
            <div>
                <Content programType="movie" />
            </div>
        );
    }
}

export default Movies;