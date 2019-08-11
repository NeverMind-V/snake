export default function mapDispatchToProps(dispatch) {
  return {
    onChangeDir: (dir) => {
      dispatch({ type: 'CHANGE_DIR', dir });
    },
    onChangeWormPos: () => {
      dispatch({ type: 'CHANGE_WORM' });
    },
    onChangeApplePos: (wormPosition) => {
      dispatch({ type: 'GET_APPLE', wormPosition });
    },
  };
}
