import React from 'react';
import PropTypes from 'prop-types';

import './worm.scss';

function Worm(props) {
  const { position } = props;
  return (
    <>
      {
        position.map(item => <div className="worm" style={item} />)
      }
    </>
  );
}

Worm.propTypes = {
  position: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)).isRequired,
};

export default Worm;
