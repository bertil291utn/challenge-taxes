const { calculateSalesTax } = require('../utils/common');

class Receipt {
  totalApplicableTaxes = [];
  printArr = [];

  constructor(_detailArr) {
    this.details = _detailArr;
  }

  getValues() {
    if (this.details?.length === 0) return;
    this.details.forEach((Detail) => {
      const { finalPrice, taxAmount } = calculateSalesTax(
        Detail.Product.price,
        Detail.getTax()
      );
      this.totalApplicableTaxes.push(taxAmount * Detail.quantity);

      this.printArr.push({
        ...Detail.Product,
        quantity: Detail.quantity,
        price: +(finalPrice * Detail.quantity).toFixed(2),
      });
    });
  }

  printValues() {
    this.printArr.forEach((elem) => {
      console.log(`${elem.quantity} ${elem.description}: ${elem.price}\n`);
    });
    console.log(`Sales Taxes: ${this.totalTaxes()}`);
    console.log(`Total: ${this.total()}`);
  }

  total() {
    return this.printArr.map((elem) => elem.price).reduce((a, b) => a + b, 0);
  }

  totalTaxes() {
    return this.totalApplicableTaxes.reduce((a, b) => a + b, 0);
  }
}
module.exports = { Receipt };
