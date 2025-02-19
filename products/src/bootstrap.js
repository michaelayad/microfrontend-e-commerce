import { faker } from "@faker-js/faker";

const mount = (el) => {
  let products = "";
  for (let index = 0; index < 10; index++) {
    const name = "a";
    products += "<div class='product'>";
    products +=
      "<h2 style='color:blue'>" + faker.commerce.productName() + "</h2>";
    products +=
      "<img src=" + faker.image.urlPicsumPhotos() + " style='width:100px'>";
    products += "<p>" + faker.commerce.productDescription() + "</p>";
    products +=
      "<button style='background-color:blue;color:white'>Add to cart</button>";
    products += "</div>";
  }

  el.innerHTML = products;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-products");
  if (el) {
    mount(el);
  }
}

export { mount };