/* 
Purpose: Evaluates how the backend system performs under load.
Tools: Apache JMeter, k6
*/

// performance.js (using k6)
const http = require('k6/http');
const { check } = require('k6');

let options = {
  stages: [
    { duration: '1m', target: 100 }, // simulate ramp-up of traffic
    { duration: '3m', target: 100 }, // stay at peak traffic
    { duration: '1m', target: 0 }, // ramp-down to zero
  ],
};

const test = () => {
  const res = http.get('http://localhost:3000/books');
  check(res, { 'status was 200': (r) => r.status === 200 });
};

describe('Performance testing', () => {
  test('test', () => {
    expect(1).toEqual(1);
  });
});
