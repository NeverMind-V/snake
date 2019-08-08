const getCoord = (i = 0) => {
  const min = 0;
  const max = 27;
  return (Math.floor(Math.random() * (max - min) + min) + i);
};

const initialState = {
  dir: 'left',
  position: {
    top: getCoord(),
    left: getCoord(),
  },
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_DIR':
      return {
        dir: action.dir,
        position: action.position,
      };
    default:
      return state;
  }
}
