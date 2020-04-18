import React from 'react';
import Content from './Content';

// MARK: Series component - it uses Content component as own
class Series extends React.Component {
  render() {
    return (
      <div>
        <Content programType="series" />
      </div>
    );
  }
}

export default Series;
