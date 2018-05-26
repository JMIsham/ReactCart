import * as types from '../actions/action-types';


export function addItem(name , quantity) {
    return {
        type: types.ITEM_ADDED,
        name:name,
        quantity:quantity
    };
}
export function removeItem(item ) {
    return {
        type: types.ITEM_REMOVED,
        item
    };
}