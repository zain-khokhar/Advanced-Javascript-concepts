// call method example
// call method is used to call a function with a given this value and arguments provided individually.
// here we are using call method to inherit the properties of product function to food function
function product(name , price){
    this.name = name;
    this.price = price;
}
function food(name , price){
    product.call(this , name , price);
    this.category = "food";

}
const item = new food("cheese", 5);
console.log(item.name);