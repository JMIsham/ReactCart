import * as types from '../actions/action-types';

export function pay() {
    return {
        type: types.PAYMENT_REQUESTED,
    };
}

export function paymentFailed() {
    return {
        type: types.PAYMENT_FAILED,
    };
}

export function paymentSucceeded(payload) {
    return {
        type: types.PAYMENT_SUCCEEDED,
        payload: payload
    };
}