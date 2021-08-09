//1
// const rectangle = {
//   width: 5,
//   height: 5, 
//   getSquare: getSquare,
// }; 

// function getSquare() {
//   return this.width * this.height;
// } 

// console.log(rectangle.getSquare()); 

//2 
// const price = {
//   price: 10, 
//   discount: '15%', 
//   getPrice: function() {
//     return this.price;
//   }, 
//   getPriceDiscount: function() {
//     return this.price - ((this.price / 100) * parseInt(this.discount));
//   }
// } 

// console.log(price.getPrice()); 
// console.log(price.getPriceDiscount()); 

//3 
// const object = {
//   height: 10,
//   increment: function() {
//     this.height += 1;
//     return this.height;
//   }
// } 

// console.log(object.height); 
// console.log(object.increment()); 

//4 
// const numerator = {
//   value: 1, 
//   double () {
//     this.value *= 2;
//     return this;
//   }, 
//   plusOne () {
//     this.value += 1; 
//     return this;
//   }, 
//   minusOne () {
//     this.value -= 1; 
//     return this;
//   }
// } 

// numerator 
//   .double()
//   .plusOne()
//   .plusOne()
//   .minusOne(); 

// console.log(numerator.value); 

//5 
// const product = {
//   count: 10,
//   price: 100,
//   getCost() {
//     return this.price * this.count;
//   }
// } 

// console.log(product.getCost()); 

//6 
// const products1 = {
//   count: 10,
//   price: 100,
//   getCost() {
//     return this.price * this.count;
//   }
// } 

// const products2 = {
//   count: 5, 
//   price: 100,
// }

// console.log(products1.getCost.call(products2)); 

//7 
// let sizes = { 
//   width: 5, 
//   height: 10
// } 
 
// getSquare = function () {return this.width * this.height}; 
// console.log(getSquare.call(sizes));

//8
let element = {
  height: 25,
  getHeight: function () {return this.height;}
};
  
let getElementHeight = element.getHeight.bind(element);
  
console.log(getElementHeight()); // undefined