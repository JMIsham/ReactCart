import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  Items: [
      {
          name : 'kottu',
          qt : 10,
          price : 200
      },
      {
          name : 'rice',
          qt : 20,
          price: 150
      }
  ]
};

const cartReducer = function(state = initialState, action) {

  // switch(action.type) {
  //
  //   case types.ITEM_REMOVED:
  //       const newItems = _.filter(state.Items, item => item != action.item);
  //       return Object.assign({}, state, { Items: newItems });
  // }

  return state;

};

export default cartReducer();
