import * as types from "./../constants/ActionTypes";

const {
  NEW_REQUEST,
  NEW_ARR
} = types

const getArray = (state = [], action) => {
   	switch (action.type) {
   		case NEW_ARR:
        	return action.data;
    	default:
        	return state;
   }
};

export default getArray;