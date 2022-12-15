const calculateSalesTax = (shelfPrice, taxRate) => {
  let taxAmount = (shelfPrice * taxRate) / 100;
  taxAmount = Math.ceil(taxAmount / 0.05) * 0.05;
  return { finalPrice: shelfPrice + taxAmount, taxAmount };
};

module.exports = { calculateSalesTax };
