'use strict';

/**
 * After a hard quarter in the office you decide to get some rest
 * on a vacation. So you will book a flight for you and your girlfriend
 * and try to leave all the mess behind you.
 *
 * You will need a rental car in order for you to get around in your
 * vacation. The manager of the car rental makes you some good offers.
 *
 * Every day you rent the car costs $40. If you rent the car for 7 or
 * more days, you get $50 off your total. Alternatively, if you rent
 * the car for 3 or more days, you get $20 off your total.
 *
 * Implement calculateRentalCost function which returns the total
 * amount for different count of days.
 *
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;
  let discountsList = [];
  class Discount {
    constructor(discountDays, discountValue) {
      this.days = discountDays;
      this.value = discountValue;
    }
  }
  function createDiscountList(dList) {
    dList.forEach(function(dItem) {
      discountsList.push(new Discount(dItem[0], dItem[1]));
    });
    discountsList = sortDiscountsFromMaxToMin(discountsList);
  }
  function compareDiscount(a, b) {
    if (a.days < b.days) {
      return 1;
    }
    if (a.days > b.days) {
      return -1;
    }
    return 0;
  }
  function sortDiscountsFromMaxToMin(dList) {
    return dList.sort(compareDiscount);
  }
  function rentalCost(rentalDays, priceForDay) {
    let discountValue = 0;
    for (let i = 0; i < discountsList.length; i++) {
      if (rentalDays >= discountsList[i]['days']) {
        discountValue = discountsList[i]['value'];
        break;
      }
    }
    return rentalDays * priceForDay - discountValue;
  }

  createDiscountList([[3, 20], [7, 50]]);
  return rentalCost(days, price);
}

module.exports = calculateRentalCost;
