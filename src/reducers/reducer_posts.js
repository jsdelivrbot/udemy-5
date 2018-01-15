import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function(state = {}, action) {
    switch (action.type) {
        case DELETE_POST:
            // look at state object, if the key of delted post id, just drop it
            // and return new state object
            return _.omit(state, action.payload);
        case FETCH_POST:
            // const post = action.payload.data;
            // const newState = { ...state, };
            // newState[post.id] = post;
            // return newState;

            return { ...state, [action.payload.data.id]: action.payload.data };
        case FETCH_POSTS:
            // mapKey helped treat state object as an object not an array
            // to help fetching the same record over and agin faster
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}
