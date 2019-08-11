import wormAutoMovement from './wormAutoMovement';
import getCoord from './getCoord';

const initialState = {
  score: 0,
  dir: 'left',
  speed: 300,
  wormPosition: [
    {
      top: 3,
      left: 2,
    },
    {
      top: 3,
      left: 3,
    },
  ],
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
    case 'GET_APPLE':
      return {
        ...state,
        score: state.score + 1,
        speed: state.speed - 10,
        wormPosition: action.wormPosition,
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
