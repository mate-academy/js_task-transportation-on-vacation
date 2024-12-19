/**
 * @param {number} days
 *
 * @return {number}
 */
'use strict';

const rentOfDay = 40;
const bonus = 20;
const hugeBonus = 50;

function calculateRentalCost(days) {
  if (days >= 7) {
    return days * rentOfDay - hugeBonus;
  }

  if (days >= 3) {
    return days * rentOfDay - bonus;
  }

  return days * rentOfDay;
}

module.exports = calculateRentalCost;
