const users = require("./users/users.service.js");
const product = require("./product/product.service.js");
const items = require("./items/items.service.js");
const order = require("./order/order.service.js");
const cart = require("./cart/cart.service.js");
const test1 = require("./test1/test1.service.js");
const test2 = require("./test2/test2.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(product);
  app.configure(items);
  app.configure(order);
  app.configure(cart);
  app.configure(test1);
  app.configure(test2);
  // ~cb-add-configure-service-name~
};
