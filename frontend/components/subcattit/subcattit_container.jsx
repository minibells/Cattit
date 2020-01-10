import React from 'react';
import { connect } from 'react-redux';
import { fetchSubcattit, createSubcattit, fetchAllSubcattits } from '../../actions/subcattit';
import Subcattit from './subcattit';

const mSTP = (state, ownProps) => {
  const info = ownProps.match.params.subcattit
  return {
    subcattits: Object.values(state.entities.subcattits),
    subcattit: ownProps.match.params.subcattit,
    subcattitInfo: state.entities.subcattits[info]
  }
}

const mDTP = dispatch => ({
  fetchSubcattit: subcattit => dispatch(fetchSubcattit(subcattit)),
  fetchAllSubcattits: () => dispatch(fetchAllSubcattits()),
  createSubcattit: subcattit => dispatch(createSubcattit(subcattit))
})

export default connect(mSTP, mDTP)(Subcattit);
