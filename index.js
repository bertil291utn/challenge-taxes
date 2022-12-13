const { Product } = require('./classes/Product');
const { Receipt } = require('./classes/Receipt');
const { Detail } = require('./classes/Detail');




//description, price, type, imported
const details = [];
const product1 = new Product('imported bottle of perfume', 27.99, 'beauty', true);
const detail1 = new Detail(product1, 1);
details.push(detail1);
const product2 = new Product('bottle of perfume', 18.99, 'beauty', false);
const detail2 = new Detail(product2, 1);
details.push(detail2);
const product3 = new Product('packet of headache pills', 9.75, 'medicine', false);
const detail3 = new Detail(product3, 1);
details.push(detail3);
const product4 = new Product('imported boxes of chocolates', 11.25, 'medicine', true);
const detail4 = new Detail(product4, 3);
details.push(detail4);

const receipt= new Receipt(details);
receipt.getValues();

receipt.printValues();

