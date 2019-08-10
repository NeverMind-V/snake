import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import mapStateToProps from '../../redux/mapStateToProps';
import mapDispatchToProps from '../../redux/mapDispatchToProps';
import Worm from '../Worm';
import Apple from '../Apple';

import './scene.scss';

class Scene extends React.Component {
  componentDidMount() {
    const { onChangeWormPos, score } = this.props;
    this.interval = setInterval(() => {
      onChangeWormPos();
    }, 300);
  }

  componentDidUpdate() {
    const { applePosition, wormPosition } = this.props;
    this.changeApplePos(applePosition, wormPosition);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getCoords = ({ top, left }) => ({
    top: `${top * 25}px`,
    left: `${left * 25}px`,
  })

  changeApplePos = (applePos, wormPos) => {
    const { onChangeApplePos } = this.props;
    const { left: appleX, top: appleY } = applePos;
    const { left: warmX, top: warmY } = wormPos;
    if (warmX === appleX && warmY === appleY) {
      onChangeApplePos();
    }
  };

  onKeyHandler = (event) => {
    const { onChangeDir } = this.props;
    let direction;
    switch (event.key) {
      case 'w':
        direction = 'up';
        break;
      case 's':
        direction = 'down';
        break;
      case 'd':
        direction = 'right';
        break;
      case 'a':
        direction = 'left';
        break;
      default:
        console.log('Wrong Button');
    }
    onChangeDir(direction);
  };

  render() {
    console.log('App', this.props);
    const { wormPosition, applePosition } = this.props;
    return (
      <div className="scene__wrapper" role="button" tabIndex="-1" onKeyPress={this.onKeyHandler}>
        <div className="scene">
          <Worm position={this.getCoords(wormPosition)} />
          <Apple position={this.getCoords(applePosition)} />
        </div>
      </div>
    );
  }
}

Scene.defaultProps = {
  onChangeDir: () => {},
  onChangeWormPos: () => {},
  onChangeApplePos: () => {},
};

Scene.propTypes = {
  onChangeDir: PropTypes.func,
  onChangeApplePos: PropTypes.func,
  onChangeWormPos: PropTypes.func,
  score: PropTypes.number.isRequired,
  wormPosition: PropTypes.objectOf(PropTypes.number).isRequired,
  applePosition: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Scene);
