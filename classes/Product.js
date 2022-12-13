class Product {
  
  constructor(description, price, type, isImported) {
    this.description = description;
    this.price = price;
    this.type = type;
    this.isImported = isImported;
  }
}

module.exports = { Product };
