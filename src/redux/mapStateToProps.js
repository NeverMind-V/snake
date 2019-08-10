export default function mapStateToProps(state) {
  return ({
    score: state.score,
    dir: state.dir,
    wormPosition: state.wormPosition,
    applePosition: state.applePosition,
  });
}
