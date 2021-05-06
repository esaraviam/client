import shoppingReducer from '../reducers/shoppingReducers';
describe('Test Reducers', () => {
  test('reducers Add Product', () => {
    let state;
    state = shoppingReducer(
      {
        shopping: {
          shoppingCart: [
            {
              _id: '609232a17fdeb3d829130731',
              id: 1,
              brand: 'Marca1',
              description: "Televisión 54''",
              image: 'www.lider.cl/catalogo/images/catalogo_no_photo.jpg',
              price: 80000,
              quantity: 3,
            },
            {
              _id: '609232a17fdeb3d829130732',
              id: 2,
              brand: 'Marca1',
              description: 'Microondas 120W',
              image: 'www.lider.cl/catalogo/images/catalogo_no_photo.jpg',
              price: 40000,
              quantity: 2,
            },
            {
              _id: '609232a17fdeb3d829130733',
              id: 3,
              brand: 'Marca1',
              description: 'Horno Gas Premium',
              image: 'www.lider.cl/catalogo/images/catalogo_no_photo.jpg',
              price: 30000,
              quantity: 2,
            },
            {
              _id: '609232a17fdeb3d829130734',
              id: 4,
              brand: 'Marca2',
              description: 'Refrigerador',
              image: 'www.lider.cl/catalogo/images/catalogo_no_photo.jpg',
              price: 20000,
              quantity: 2,
            },
          ],
        },
      },
      {
        type: 'ADD PRODUCT',
        product: {
          _id: '609232a17fdeb3d829130731',
          id: 1,
          brand: 'Marca1',
          description: "Televisión 54''",
          image: 'www.lider.cl/catalogo/images/catalogo_no_photo.jpg',
          price: 80000,
          quantity: 3,
        },
      }
    );
    expect(state).toEqual({
      shopping: {
        shoppingCart: [
          {
            _id: '609232a17fdeb3d829130731',
            id: 1,
            brand: 'Marca1',
            description: "Televisión 54''",
            image: 'www.lider.cl/catalogo/images/catalogo_no_photo.jpg',
            price: 80000,
            quantity: 3,
          },
          {
            _id: '609232a17fdeb3d829130732',
            id: 2,
            brand: 'Marca1',
            description: 'Microondas 120W',
            image: 'www.lider.cl/catalogo/images/catalogo_no_photo.jpg',
            price: 40000,
            quantity: 2,
          },
          {
            _id: '609232a17fdeb3d829130733',
            id: 3,
            brand: 'Marca1',
            description: 'Horno Gas Premium',
            image: 'www.lider.cl/catalogo/images/catalogo_no_photo.jpg',
            price: 30000,
            quantity: 2,
          },
          {
            _id: '609232a17fdeb3d829130734',
            id: 4,
            brand: 'Marca2',
            description: 'Refrigerador',
            image: 'www.lider.cl/catalogo/images/catalogo_no_photo.jpg',
            price: 20000,
            quantity: 2,
          },
        ],
      },
    });
  });
  test('reducers Increment Product', () => {
    let state;
    state = shoppingReducer(
      {
        shopping: {
          shoppingCart: [
            {
              _id: '609232a17fdeb3d829130731',
              id: 1,
              brand: 'Marca1',
              description: "Televisión 54''",
              image: 'www.lider.cl/catalogo/images/catalogo_no_photo.jpg',
              price: 80000,
              quantity: 3,
            },
            {
              _id: '609232a17fdeb3d829130732',
              id: 2,
              brand: 'Marca1',
              description: 'Microondas 120W',
              image: 'www.lider.cl/catalogo/images/catalogo_no_photo.jpg',
              price: 40000,
              quantity: 2,
            },
            {
              _id: '609232a17fdeb3d829130733',
              id: 3,
              brand: 'Marca1',
              description: 'Horno Gas Premium',
              image: 'www.lider.cl/catalogo/images/catalogo_no_photo.jpg',
              price: 30000,
              quantity: 2,
            },
            {
              _id: '609232a17fdeb3d829130734',
              id: 4,
              brand: 'Marca2',
              description: 'Refrigerador',
              image: 'www.lider.cl/catalogo/images/catalogo_no_photo.jpg',
              price: 20000,
              quantity: 2,
            },
          ],
        },
      },
      {
        type: 'INCREMENT PRODUCT',
        product: {
          _id: '609232a17fdeb3d829130734',
          id: 4,
          brand: 'Marca2',
          description: 'Refrigerador',
          image: 'www.lider.cl/catalogo/images/catalogo_no_photo.jpg',
          price: 20000,
          quantity: 2,
        },
      }
    );
    expect(state).toEqual({
      shopping: {
        shoppingCart: [
          {
            _id: '609232a17fdeb3d829130731',
            id: 1,
            brand: 'Marca1',
            description: "Televisión 54''",
            image: 'www.lider.cl/catalogo/images/catalogo_no_photo.jpg',
            price: 80000,
            quantity: 3,
          },
          {
            _id: '609232a17fdeb3d829130732',
            id: 2,
            brand: 'Marca1',
            description: 'Microondas 120W',
            image: 'www.lider.cl/catalogo/images/catalogo_no_photo.jpg',
            price: 40000,
            quantity: 2,
          },
          {
            _id: '609232a17fdeb3d829130733',
            id: 3,
            brand: 'Marca1',
            description: 'Horno Gas Premium',
            image: 'www.lider.cl/catalogo/images/catalogo_no_photo.jpg',
            price: 30000,
            quantity: 2,
          },
          {
            _id: '609232a17fdeb3d829130734',
            id: 4,
            brand: 'Marca2',
            description: 'Refrigerador',
            image: 'www.lider.cl/catalogo/images/catalogo_no_photo.jpg',
            price: 20000,
            quantity: 2,
          },
        ],
      },
    });
  });

  test('reducers Decrement Product', () => {
    let state;
    state = shoppingReducer(
      {
        shopping: {
          shoppingCart: [
            {
              _id: '609232a17fdeb3d829130731',
              id: 1,
              brand: 'Marca1',
              description: "Televisión 54''",
              image: 'www.lider.cl/catalogo/images/catalogo_no_photo.jpg',
              price: 80000,
              quantity: 3,
            },
            {
              _id: '609232a17fdeb3d829130732',
              id: 2,
              brand: 'Marca1',
              description: 'Microondas 120W',
              image: 'www.lider.cl/catalogo/images/catalogo_no_photo.jpg',
              price: 40000,
              quantity: 2,
            },
            {
              _id: '609232a17fdeb3d829130733',
              id: 3,
              brand: 'Marca1',
              description: 'Horno Gas Premium',
              image: 'www.lider.cl/catalogo/images/catalogo_no_photo.jpg',
              price: 30000,
              quantity: 2,
            },
            {
              _id: '609232a17fdeb3d829130734',
              id: 4,
              brand: 'Marca2',
              description: 'Refrigerador',
              image: 'www.lider.cl/catalogo/images/catalogo_no_photo.jpg',
              price: 20000,
              quantity: 2,
            },
          ],
        },
      },
      {
        type: 'DECREMENT PRODUCT',
        product: {
          _id: '609232a17fdeb3d829130731',
          id: 1,
          brand: 'Marca1',
          description: "Televisión 54''",
          image: 'www.lider.cl/catalogo/images/catalogo_no_photo.jpg',
          price: 80000,
          quantity: 2,
        },
      }
    );
    expect(state).toEqual({
      shopping: {
        shoppingCart: [
          {
            _id: '609232a17fdeb3d829130731',
            id: 1,
            brand: 'Marca1',
            description: "Televisión 54''",
            image: 'www.lider.cl/catalogo/images/catalogo_no_photo.jpg',
            price: 80000,
            quantity: 2,
          },
          {
            _id: '609232a17fdeb3d829130732',
            id: 2,
            brand: 'Marca1',
            description: 'Microondas 120W',
            image: 'www.lider.cl/catalogo/images/catalogo_no_photo.jpg',
            price: 40000,
            quantity: 2,
          },
          {
            _id: '609232a17fdeb3d829130733',
            id: 3,
            brand: 'Marca1',
            description: 'Horno Gas Premium',
            image: 'www.lider.cl/catalogo/images/catalogo_no_photo.jpg',
            price: 30000,
            quantity: 2,
          },
          {
            _id: '609232a17fdeb3d829130734',
            id: 4,
            brand: 'Marca2',
            description: 'Refrigerador',
            image: 'www.lider.cl/catalogo/images/catalogo_no_photo.jpg',
            price: 20000,
            quantity: 2,
          },
        ],
      },
    });
  });
});
