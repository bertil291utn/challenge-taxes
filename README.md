# Taxes challenge

- In `index.js` file add product object, then a new detail object passing product as parameter, then push to details variables 

_Copy and paste any input from [Examples](#Examples)_

- When it's done run this script
```js 
node index.js
```

## Examples
```js

//Input 1
const product1 = new Product('book', 12.49, 'books', false);
const detail1 = new Detail(product1, 2);
details.push(detail1);
const product2 = new Product('music cd', 14.99, 'music', false);
const detail2 = new Detail(product2, 1);
details.push(detail2);
const product3 = new Product('choclate bar', 0.85, 'food', false);
const detail3 = new Detail(product3, 1);
details.push(detail3);

//Input 2
const product1 = new Product('imported box of chocolates', 10.00, 'food', true);
const detail1 = new Detail(product1, 1);
details.push(detail1);
const product2 = new Product('imported bottle of perfume ', 47.5, 'beauty', true);
const detail2 = new Detail(product2, 1);
details.push(detail2);


//Input 3

const product1 = new Product('imported bottle of perfume', 27.99, 'beauty', true);
const detail1 = new Detail(product1, 1);
details.push(detail1);
const product2 = new Product('bottle of perfume', 18.99, 'beauty', false);
const detail2 = new Detail(product2, 1);
details.push(detail2);
const product3 = new Product('packet of headache pills', 9.75, 'medicine', false);
const detail3 = new Detail(product3, 1);
details.push(detail3);
const product4 = new Product('imported boxes of chocolates', 11.25, 'food', true);
const detail4 = new Detail(product4, 3);
details.push(detail4);

```