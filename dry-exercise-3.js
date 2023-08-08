/*
 - This program validates our product properties before importing it into our DB
 - What happens if we add more properties to our product that needs validation?? The current implementation will not scale 😱
 - Refactor the code to follow the DRY Principle. Let's GO!
*/

class CsvValidation {
  constructor(product) {
    this.product = product;
  }

  validateProduct(product) {
    if (!product.color) {
      throw new Error("Import failed: The product [color] is missing");
    }
    if (!product.size) {
      throw new Error("Import failed: The product [size] is missing");
    }
    if (!product.style) {
      throw new Error("Import failed: The product [style] is missing");
    }
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