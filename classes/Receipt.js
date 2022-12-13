class Receipt {
  totalApplicableTaxes = [];
  printArr = [];

  constructor(_detailArr) {
    this.products = _detailArr;
  }

  getValues() {
    if (this.products?.length === 0) return;
    this.products.forEach((Detail) => {
      let priceAug = Detail.getPVPPrice();
      priceAug += Detail.getPVPPrice() * Detail.getTax();
      this.totalApplicableTaxes.push(Detail.getPVPPrice() * Detail.getTax());

      priceAug = Math.round(priceAug * 100) / 100;
      this.printArr.push({
        ...Detail.Product,
        quantity: Detail.quantity,
        price: priceAug,
      });
    });
  }

  printValues() {
    this.printArr.forEach((elem) => {
      console.log(`${elem.quantity} ${elem.description}: ${elem.price}\n`);
    });
    console.log(`Sales Taxes: ${Math.ceil(this.totalTaxes() * 20) / 20}`);
    console.log(`Total: ${Math.round(this.total() * 100) / 100}`);
  }

  total() {
    return this.printArr.map((elem) => elem.price).reduce((a, b) => a + b, 0);
  }

  totalTaxes() {
    return this.totalApplicableTaxes.reduce((a, b) => a + b, 0);
  }
}
module.exports = { Receipt };
