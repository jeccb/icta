import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import EditIdea from '../components/EditIdea';
import { fetchIdea, editIdea, getAllUsers } from '../actions/ideas';

const EditIdeaContainer = ({idea, onEdit, ideaId, fetchIdea, history, allUsers, getAllUsers}) => {
  if (!idea || idea.id != ideaId) {
    fetchIdea(ideaId);
    return null;
  } else {
    return (
      <EditIdea
        idea={idea}
        allUsers={allUsers}
        getAllUsers={getAllUsers}
        onEditIdea={(attributes) => onEdit(idea.id, history, attributes)}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  idea: state.currentIdea,
  ideaId: ownProps.match.params.id,
  allUsers: state.allUsers,
});

const mapDispatchToProps = (dispatch) => ({
  fetchIdea: (ideaId) => {
    dispatch(fetchIdea(ideaId));
  },
  onEdit: (ideaId, history, attributes) => {
    dispatch(editIdea(ideaId, attributes, history));
  },
  getAllUsers: () => {
    dispatch(getAllUsers());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(EditIdeaContainer);
