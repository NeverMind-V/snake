import React from 'react';
import PropTypes from 'prop-types';

import './worm.scss';

function Worm(props) {
  const { position } = props;
  return (
    <div className="worm" style={position} />
  );
}

Worm.propTypes = {
  position: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Worm;
