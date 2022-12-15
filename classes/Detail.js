class Detail {
  _typeArr = ['books', 'medicine', 'food'];

  constructor(Product, quantity) {
    this.quantity = quantity;
    this.Product = Product;
  }

  getTax() {
    let tax = 0;
    if (!this._typeArr.includes(this.Product.type)) {
      tax = 10;
    }
    if (this.Product.isImported) {
      tax += 5;
    }
    return tax;
  }
}

module.exports = { Detail };
