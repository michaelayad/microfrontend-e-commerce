import { faker } from "@faker-js/faker";

const mount = (el) => {
  let cart = `<div> ${faker.number.int()} Items </div>`;

  el.innerHTML = cart;
};


if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-cart");
  if (el) {
    mount(el);
  }
}

export { mount };