import {faker} from '@faker-js/faker';

let cart=`<div> ${faker.number.int()} Items </div>`;


document.getElementById("dev-cart").innerHTML=cart