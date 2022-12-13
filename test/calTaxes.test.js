const { Detail } = require('../classes/Detail');
const { Product } = require('../classes/Product');

test('get 15 percent as tax value', () => {
  const product1 = new Product(
    'imported bottle of perfume',
    27.99,
    'beauty',
    true
  );
  const detail1 = new Detail(product1, 1);

  expect(+detail1.getTax().toFixed(2)).toBe(0.15);
});

test('should get any value but  not 15 percent tax value', () => {
  const product1 = new Product(
    'imported bottle of perfume',
    27.99,
    'beauty',
    true
  );
  const detail1 = new Detail(product1, 1);

  expect(+detail1.getTax().toFixed(2)).not.toBe(0.154);
});

