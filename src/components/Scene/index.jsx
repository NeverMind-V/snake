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
    const { onChangeWormPos, speed } = this.props;
    this.interval = setInterval(() => {
      onChangeWormPos();
    }, speed);
  }

  componentDidUpdate() {
    const {
      applePosition, wormPosition, onChangeWormPos, speed,
    } = this.props;
    this.changeApplePos(applePosition, wormPosition);
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      onChangeWormPos();
    }, speed);
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
    const { left: warmX, top: warmY } = wormPos[wormPos.length - 1];
    const wormBody = wormPos.unshift([]);
    if (warmX === appleX && warmY === appleY) {
      onChangeApplePos(wormBody);
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
    const { applePosition } = this.props;
    let { wormPosition } = this.props;
    wormPosition = wormPosition.map(item => this.getCoords(item));
    return (
      <div className="scene__wrapper" role="button" tabIndex="-1" onKeyPress={this.onKeyHandler}>
        <div className="scene">
          <Worm position={wormPosition} />
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
  speed: PropTypes.number.isRequired,
  wormPosition: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)).isRequired,
  applePosition: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Scene);
