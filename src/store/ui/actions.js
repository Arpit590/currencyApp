import {createAction} from '@reduxjs/toolkit';

export const actions = {
  CHANGE_CONTENT: 'CHANGE_CONTENT',
};

export const changeContent = createAction(actions.CHANGE_CONTENT);

export default actions;
