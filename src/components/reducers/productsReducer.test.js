import reducer from './productsReducer';

const initState = {
  products: [
      {name: "Sledgehammer", price: 127.76 },
      {name: "Axe", price: 190.51 },
      {name: "Bandsaw",price: 562.14 },
      {name: "Chisel", price: 13.9 },
      {name: "Hacksaw", price: 19.45 }
  ],
  addedProducts:[],
  total: 0
}

describe('actions', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initState)
  })
})