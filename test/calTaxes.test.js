const { Detail } = require('../classes/Detail');
const { Product } = require('../classes/Product');
const { calculateSalesTax } = require('../utils/common');

test('get 15 percent as tax value', () => {
  const product1 = new Product(
    'imported bottle of perfume',
    27.99,
    'beauty',
    true
  );
  const detail1 = new Detail(product1, 1);

  expect(detail1.getTax()).toBe(15);
});

test('should get any value but  not 15 percent tax value', () => {
  const product1 = new Product(
    'imported bottle of perfume',
    27.99,
    'beauty',
    true
  );
  const detail1 = new Detail(product1, 1);

  expect(detail1.getTax()).not.toBe(10);
});

test('should return a ceiling 0.005 pecentage final price value', () => {
  const { finalPrice } = calculateSalesTax(12.1, 10);
  expect(finalPrice).toBe(13.35);
});

test('should return a ceiling 0.005 pecentage tax amount value', () => {
  const { taxAmount } = calculateSalesTax(12.1, 10);
  expect(taxAmount).toBe(1.25);
});
