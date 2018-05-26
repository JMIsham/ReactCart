import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  loginSucceeded:false,
    Items: [
        {
            name : 'kottu',
            qt : 10,
            price: 150
        },
        {
            name : 'rice',
            qt : 20,
            price: 200
        }
    ]
};

const userReducer = function(state = initialState, action) {

  switch(action.type) {

      case types.LOGIN_REQUESTED:
        return Object.assign({},state,{loginPending:true});

      case types.LOGIN_SUCCEEDED:
        return Object.assign({}, state, {loginPending:false, loginSucceeded:true});

      case types.LOGIN_FAILED:
        return Object.assign({}, state, {loginPending:false, loginSucceeded:false});

      case types.ITEM_REMOVED:
          const newItems = _.filter(state.Items, item => item != action.item);
          return Object.assign({}, state, { Items: newItems });

  }

  return state;

}

export default userReducer;
