import wormAutoMovement from './wormAutoMovement';
import getCoord from './getCoord';

const initialState = {
  score: 0,
  dir: 'left',
  wormPosition: {
    top: getCoord(),
    left: getCoord(),
  },
  applePosition: {
    top: getCoord(),
    left: getCoord(),
  },
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_DIR':
      return {
        ...state,
        dir: action.dir,
      };
    case 'CHANGE_APPLE':
      return {
        ...state,
        score: state.score + 1,
        applePosition: {
          top: getCoord(),
          left: getCoord(),
        },
      };
    case 'CHANGE_WORM':
      return {
        ...state,
        wormPosition: wormAutoMovement(state.dir, state.wormPosition),
      };
    default:
      return state;
  }
}
