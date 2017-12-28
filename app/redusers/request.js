import * as types from "./../constants/ActionTypes";

const {
  NEW_REQUEST,
  NEW_ARR
} = types

const request = (state = "User", action) => {
   	switch (action.type) {
   		case NEW_REQUEST:
        	return action.request;
    	default:
        	return state;
   }
};

export default request;