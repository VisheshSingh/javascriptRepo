var orderCount = 0;

function takeOrder(topping, crustType) {
  orderCount = orderCount+ 1;
  console.log('Order: '+ crustType + ' pizza topped with ' +  topping);
};

function getSubTotal(itemCount) {
  return itemCount * 7.5;
};

takeOrder("bacon","thin crust");
takeOrder("chicken","Thick crust");
takeOrder("olives and hot sauce", "thin crust");

console.log(getSubTotal(orderCount));