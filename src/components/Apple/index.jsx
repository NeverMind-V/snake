import React from 'react';
import PropTypes from 'prop-types';

import './apple.scss';

function Apple(props) {
  const { position } = props;
  return (
    <div className="apple" style={position} />
  );
}

Apple.propTypes = {
  position: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Apple;
