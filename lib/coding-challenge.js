/*
 * coding challenge
 * https://github.com/bsgbryan/coding-challenge
 *
 * Copyright (c) 2015 Bryan Maynard
 * Licensed under the MIT license.
 */

'use strict';

var types = {
  'developer': 1000,
  'qa tester': 500,
  'manager':   300,
};

module.exports = function calculate_expenses(employees) {
  var total_expenses = 0;

  if (Array.isArray(employees)) {
    employees.forEach(function (e) {
      if (typeof e.type === 'string') {
        var employee_type = e.type.toLowerCase();

        if (typeof types[employee_type] !== 'undefined') {
          total_expenses += types[employee_type];

          if (employee_type === 'manager' && Array.isArray(e.employees)) {
            total_expenses += calculate_expenses(e.employees);
          }
        }
      }
    });
  }

  return total_expenses;
};
