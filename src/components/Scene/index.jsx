import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import mapStateToProps from '../../redux/mapStateToProps';
import mapDispatchToProps from '../../redux/mapDispatchToProps';
import Worm from '../Worm';

import './scene.scss';

class Scene extends React.Component {
  getCoords = ({ top, left }) => ({
    top: `${top * 25}px`,
    left: `${left * 25}px`,
  })

  swapCoords = (coord) => {
    const minCoord = 0;
    const maxCoord = 27;
    let resultCoord;
    if (coord === minCoord) {
      resultCoord = maxCoord;
    } else if (coord === maxCoord) {
      resultCoord = minCoord;
    }
    return resultCoord;
  };

  onKeyHandler = (event) => {
    const { onChangeDir, position } = this.props;
    let direction;
    let nextPosition;
    switch (event.key) {
      case 'w':
        direction = 'up';
        nextPosition = { ...position, top: this.swapCoords(position.top) || position.top - 1 };
        break;
      case 's':
        direction = 'down';
        nextPosition = { ...position, top: this.swapCoords(position.top) || position.top + 1 };
        break;
      case 'd':
        direction = 'right';
        nextPosition = { ...position, left: this.swapCoords(position.left) || position.left + 1 };
        break;
      case 'a':
        direction = 'left';
        nextPosition = { ...position, left: this.swapCoords(position.left) || position.left - 1 };
        break;
      default:
        console.log('Wrong Button');
    }
    console.log(nextPosition);
    onChangeDir(direction, nextPosition);
  };

  render() {
    console.log('App', this.props);
    const { position } = this.props;
    return (
      <div className="scene__wrapper" role="button" tabIndex="-1" onKeyPress={this.onKeyHandler}>
        <div className="scene">
          <Worm position={this.getCoords(position)} />
        </div>
      </div>
    );
  }
}

Scene.defaultProps = {
  onChangeDir: () => {},
};

Scene.propTypes = {
  onChangeDir: PropTypes.func,
  position: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Scene);
