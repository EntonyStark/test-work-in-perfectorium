import * as types from "./../constants/ActionTypes";

const {
  NEW_REQUEST,
  NEW_ARR
} = types

export const newRequest = (request) => {
   	return {
      	type: NEW_REQUEST,
      	request
   	};
};

export const newArray = (data) => {
   	return {
      	type: NEW_ARR,
     	data
   	};
};