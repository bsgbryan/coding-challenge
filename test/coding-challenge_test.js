'use strict';

var codingChallenge = require('../');
var assert = require('should');

describe('codingChallenge', function () {

  it('returns zero if no employees are passed', function () {
    codingChallenge().should.equal(0);
  });

  it('sums all employee expenses', function () {
    var example_employees = [
      {
        name: 'Sonic',
        type: 'Manager'
      }, {
        name: 'Mario',
        type: 'Manager'
      }
    ];
    codingChallenge(example_employees).should.equal(600);
  });

  it('skips employees that do not have a type specified', function () {
    var example_employees = [
      {
        name: 'Sonic'
      }, {
        name: 'Mario',
        type: 'Manager'
      }
    ];
    codingChallenge(example_employees).should.equal(300);
  });

  it('ignores the case used for type', function () {
    var example_employees = [
      {
        name: 'Sonic',
        type: 'MANAGER'
      }, {
        name: 'Mario',
        type: 'MaNaGeR'
      }
    ];
    codingChallenge(example_employees).should.equal(600);
  });

  it('ignores employees with a type that is not one of: manager, qa tester, developer', function () {
    var example_employees = [
      {
        name: 'Sonic',
        type: 'MANAGER'
      }, {
        name: 'Mario',
        type: 'plumber'
      }
    ];
    codingChallenge(example_employees).should.equal(300);
  });

  it('processes expenses for employees of a manager', function () {
    var example_employees = [
      {
        name: 'Sonic',
        type: 'MANAGER',
        employees: [
          {
            name: 'Myles',
            type: 'Developer'
          }, {
            name: 'Knuckles',
            type: 'QA Tester'
          }
        ]
      }
    ];
    codingChallenge(example_employees).should.equal(1800);
  });

  it('ignores employees of non-managers', function () {
    var example_employees = [
      {
        name: 'Sonic',
        type: 'qa tester',
        employees: [
          {
            name: 'Myles',
            type: 'Developer'
          }, {
            name: 'Knuckles',
            type: 'QA Tester'
          }
        ]
      }
    ];
    codingChallenge(example_employees).should.equal(500);
  });

  it('allows arbitray nesting of employees under managers', function () {
    var example_employees = [
      {
        name: 'Sonic',
        type: 'MANAGER',
        employees: [
          {
            name: 'Myles',
            type: 'Developer'
          }, {
            name: 'Knuckles',
            type: 'QA Tester'
          }, {
            name: 'Robotinik',
            type: 'manager',
            employees: [
              {
                name: 'Rabbit',
                type: 'QA TESTER'
              }, {
                name: 'Fish',
                type: 'developer'
              }
            ]
          }
        ]
      }
    ];
    codingChallenge(example_employees).should.equal(3600);
  });

});
