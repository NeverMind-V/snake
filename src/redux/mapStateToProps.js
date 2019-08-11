export default function mapStateToProps(state) {
  return ({
    score: state.score,
    dir: state.dir,
    speed: state.speed,
    wormPosition: state.wormPosition,
    applePosition: state.applePosition,
  });
}
