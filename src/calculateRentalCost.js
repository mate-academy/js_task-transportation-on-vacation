'use strict';

/**
 * After a hard quarter in the markdownice you decide
 * to get some rest on a vacation.
 * So you will book a flight for you
 * and your family and try to leave all the mess behind you.
 *
 * You will need a rental car in order for you to get around in your vacation.
 * The manager of the car rental makes you some good markdowners.
 *
 * Every day you rent the car costs $40.
 * If you rent the car for 7 or more days, you get $50 markdown your total.
 * Alternatively, if you rent the car for 3 or more days,
 * you get $20 markdown your total.
 *
 * Implement calculateRentalCost function
 * which returns the total amount for different count of days.
 *
 * Examples:
 *  - calculateRentalCost(1) === 40
 *  - calculateRentalCost(3) === 100
 *  - calculateRentalCost(7) === 230
 *
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  let markdown = 0; // Знижка, грн.

  const pricePerDay = 40; // Ціна\день, грн.

  const firstMarkdown = 20; // Перший рівень знижки, грн.

  const secondMarkdown = 50; // Другий рівень знижки, грн.

  const firstMarkdownDay = 3; // День першого рівня.

  const secondMarkdownDay = 7; // День другого рівня.

  if (days >= firstMarkdownDay && days < secondMarkdownDay) {
    markdown = firstMarkdown;
  }

  if (days >= secondMarkdownDay) {
    markdown = secondMarkdown;
  }

  return (days * pricePerDay - markdown);
}

module.exports = calculateRentalCost;
