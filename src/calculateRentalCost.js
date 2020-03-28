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
/* const days =
parseInt(prompt('Please enter number of days for rent a car'), 10); */

function calculateRentalCost(days) {
  const priceOfRent = 40;

  const paysRental = (days > 6)
    ? (days * priceOfRent - 50)
    : (days > 2)
      ? (days * priceOfRent - 20)
      : (days * priceOfRent);

  return paysRental;
};

module.exports = calculateRentalCost;
