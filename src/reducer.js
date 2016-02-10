import {List, Map, fromJS} from 'immutable';

export const setState = (state, charges) => {
	return state.set('credit', List(fromJS(charges)));
}

export const addCharge = (state, charge) => {
  const newCharges = state
                      .get('credit', List())
                      .unshift(fromJS(charge));

  return state.set('credit', newCharges);
}

export const setCategories = (state, categories) => {
  return state.set('categories', List(fromJS(categories)))
}

export default (state = Map(), action) => {
  switch (action.type) {
  case 'ADD_CHARGE':
    return addCharge(state, action.charge);
  case 'SET_ENTRIES':
    return setState(state, action.entries);
  case 'SET_CATEGORIES':
    return setCategories(state, action.categories);
  }

  return state;
}
