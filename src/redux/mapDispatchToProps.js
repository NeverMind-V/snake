export default function mapDispatchToProps(dispatch) {
  return {
    onChangeDir: (dir) => {
      dispatch({ type: 'CHANGE_DIR', dir });
    },
  };
}
