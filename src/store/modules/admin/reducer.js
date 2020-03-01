import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
};

export default function admin(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_SUCCESS':
      return produce(state, draft => {
        draft.profile = action.payload.admin;
      });
    default:
      return state;
  }
}
