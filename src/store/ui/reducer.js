import types from './actions';

const initUi = {
  currentContent: 'Home',
};

export default function reducer(state = initUi, action) {
  switch (action.type) {
    case types.CHANGE_CONTENT: {
      let currentContent = state.currentContent;
      if (action.payload) {
        currentContent = action.payload;
      }
      return {...state, currentContent: currentContent};
    }

    default:
      return state;
  }
}
