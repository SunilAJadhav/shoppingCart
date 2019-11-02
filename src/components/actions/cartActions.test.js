import * as actions from './cartActions';
import * as types from '../constants/ActionTypes';

describe('actions', () => {
  it('should create an action to add to a cart', () => {
    const name = 'Axe'
    const expectedAction = {
      type: types.ADD_TO_CART,
      name
    }
    expect(actions.addToCart(name)).toEqual(expectedAction)
  })
})