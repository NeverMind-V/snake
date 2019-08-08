export default function mapStateToProps(state) {
  return ({
    dir: state.dir,
    position: state.position,
  });
}
