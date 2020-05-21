'use strict';

function calculateRentalCost(days) {
  const priceForDay = 40;
  const smalldiscount = 20;
  const BigDiscount = 50;

  if (days < 3) {
    return days * priceForDay;
  } ;

  if (days >= 3 && days < 7) {
    return days * priceForDay - smalldiscount;
  };

  return days * priceForDay - BigDiscount;
}
module.exports = calculateRentalCost;
