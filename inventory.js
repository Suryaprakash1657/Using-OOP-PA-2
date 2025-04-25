class Product {
    constructor(name, productId, price, stock = 0) {
      this.name = name;
      this.productId = productId;
      this.price = price;
      this.stock = stock;
    }
  
    addStock(quantity) {
      this.stock += quantity;
      console.log(`${quantity} units added. New stock of '${this.name}': ${this.stock}`);
    }
  
    sell(quantity) {
      if (this.stock >= quantity) {
        this.stock -= quantity;
        console.log(`${quantity} units sold from '${this.name}'. Remaining stock: ${this.stock}`);
      } else {
        console.log(`Not enough stock to sell ${quantity} units of '${this.name}'. Available: ${this.stock}`);
      }
    }
  }

  class Inventory {
    constructor() {
      this.products = [];
    }
  
    addProduct(product) {
      this.products.push(product);
      console.log(`Product '${product.name}' added to inventory.`);
    }
  
    sellProduct(productId, quantity) {
      const product = this.products.find(p => p.productId === productId);
      if (product) {
        product.sell(quantity);
      } else {
        console.log(`Product with ID ${productId} not found.`);
      }
    }
  
    checkStock(productId) {
      const product = this.products.find(p => p.productId === productId);
      if (product) {
        console.log(`Stock for '${product.name}': ${product.stock}`);
      } else {
        console.log(`Product with ID ${productId} not found.`);
      }
    }
  }
const laptop = new Product("Laptop", 101, 1500);
const mouse = new Product("Mouse", 102, 25);
const storeInventory = new Inventory();
storeInventory.addProduct(laptop);
storeInventory.addProduct(mouse);


laptop.addStock(10);
mouse.addStock(50);
storeInventory.sellProduct(101, 3);  
storeInventory.sellProduct(102, 20);  
storeInventory.checkStock(101);
storeInventory.checkStock(102);
  