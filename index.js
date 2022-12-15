const { Product } = require('./classes/Product');
const { Receipt } = require('./classes/Receipt');
const { Detail } = require('./classes/Detail');




//description, price, type, imported
const details = [];

const product1 = new Product('book', 12.49, 'books', false);
const detail1 = new Detail(product1, 2);
details.push(detail1);
const product2 = new Product('music cd', 14.99, 'music', false);
const detail2 = new Detail(product2, 1);
details.push(detail2);
const product3 = new Product('choclate bar', 0.85, 'food', false);
const detail3 = new Detail(product3, 1);
details.push(detail3);


//UNTIL HERE


const receipt= new Receipt(details);
receipt.getValues();

receipt.printValues();

