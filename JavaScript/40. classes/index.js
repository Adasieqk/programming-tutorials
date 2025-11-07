// class = (ES6 feature) provides a more structured and cleaner way to work with objects compared to traditional constructor functions ex. static keyword, encapsulation

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    displayProduct() {   // inside classes you dont need the 'function' keyword
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax) {
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05;

const product1 = new Product("Shirt", 19.99);
product1.displayProduct();
const total1 = product1.calculateTotal(salesTax);
console.log(`Total price with tax $${total1.toFixed(2)}`);

const product2 = new Product("Pants", 22.50);
product2.displayProduct();
const total2 = product2.calculateTotal(salesTax);
console.log(`Total price with tax $${total2.toFixed(2)}`);

const product3 = new Product("Underwear", 100.00);
product3.displayProduct();
const total3 = product3.calculateTotal(salesTax);
console.log(`Total price with tax $${total3.toFixed(2)}`);

