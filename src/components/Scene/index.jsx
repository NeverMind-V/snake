import React from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapStateToProps';
import mapDispatchToProps from '../../redux/mapDispatchToProps';
import Worm from '../Worm';

import './scene.scss';

class Scene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pos: {
        top: '0px',
        left: '0px',
      },
    };
  }

  componentDidMount() {
    this.setState({
      pos: this.wormPosition(),
    });
  }

    wormPosition = () => {
      const min = 0;
      const max = 700;
      const x = Math.floor(Math.random() * (max - min) + min);
      const y = Math.floor(Math.random() * (max - min) + min);
      return ({
        top: `${x}px`,
        left: `${y}px`,
      });
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
      const { pos } = this.state;
      return (
        <div className="scene__wrapper" role="button" tabIndex="-1" onKeyPress={this.onKeyHandler}>
          <div className="scene">
            <Worm position={pos} />
          </div>
        </div>
      );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scene);
