const { Detail } = require('../classes/Detail');

test('get taxes value', () => {
  const product1 = new Product(
    'imported bottle of perfume',
    27.99,
    'beauty',
    true
  );
  console.log("🚀 ~ file: calTaxes.test.js:8 ~ test ~ product1", product1)
  const detail1 = new Detail(product1, 1);

  expect(detail1.getTax()).toBe(0.1);
});
