// Solution Example
class CsvValidation {
  constructor(product) {
    this.product = product;
  }

  productAttributes = [
    "color",
    "size",
    "style",
  ];

  validateProduct = (product) => {
    this.productAttributes.forEach(attribute => {
      if (!product[attribute]) {
        throw new Error(`Import failed: The product [${attribute}] is missing`);
      }
    })
    console.log("VALID: PASSED");
  }
}

const shirt = {
  color: "blue",
  size: "LG",
  style: "polo"
};

const product = new CsvValidation();
product.validateProduct(shirt);