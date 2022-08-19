import React from 'react';
import propTypes from 'prop-types';
import './Title.css';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <div className="planeta">
        <h2 className="headline">{headline}</h2>
      </div>
    );
  }
}

Title.propTypes = {
  headline: propTypes.string.isRequired,
};

export default Title;
