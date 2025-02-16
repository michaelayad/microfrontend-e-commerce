
import { faker } from '@faker-js/faker';

let products="";
for (let index = 0; index < 10; index++) {
    const name= "a"
    products+="<div class='product'>"
    products+="<h2>"+faker.commerce.productName()+"</h2>"
    products+="<p>"+faker.commerce.productDescription()+"</p>"
    products+="</div>"
}

console.log(products)

document.getElementById("root").innerHTML=products
