class Detail {
  _typeArr = ['books', 'medicine', 'food'];

  constructor(Product, quantity) {
    this.quantity = quantity;
    this.Product = Product;
  }


  getPVPPrice() {
    return this.Product.price * this.quantity;
  }

  getTax() {
    let tax = 0;
    if (!this._typeArr.includes(this.Product.type)) {
      tax = 0.1;
    }
    if (this.Product.isImported) {
      tax += 0.05;
    }
    return tax;
  }
}

module.exports = { Detail };
