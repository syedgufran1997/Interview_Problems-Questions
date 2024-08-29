// A promise is an object representing the eventual completion/failure of an asynchronous operation

// Avoid using callbacks because it will create callback hell and inversion of control

const cart = ["apple", "shoes", "pen"];

createOrder(orderId, function (paymentInfo) {
  showOrderSummary(paymentInfo);
});

const promise = createOrder(cart);
