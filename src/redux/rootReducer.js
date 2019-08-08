const initialState = {
  dir: 'left',
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_DIR':
      return {
        dir: action.dir,
      };
    default:
      return state;
  }
}
