/**
 * @param {number} days
 *
 * @return {number}
 */
'use strict';

const rentOfDay = 40;

function calculateRentalCost(days) {
  if (days >= 7) {
    return days * rentOfDay - 50;
  }

  if (days >= 3) {
    return days * rentOfDay - 20;
  }

  return days * rentOfDay;
}

module.exports = calculateRentalCost;
