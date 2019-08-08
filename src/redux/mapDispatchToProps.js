export default function mapDispatchToProps(dispatch) {
  return {
    onChangeDir: (dir, position) => {
      dispatch({ type: 'CHANGE_DIR', dir, position });
    },
  };
}
