import currency from 'currency.js';

interface Calculate {
  add: (firstValue: number | string, secondValue: number | string) => number;
  sub: (firstValue: number | string, secondValue: number | string) => number;
  multiply: (firstValue: number | string, secondValue: number | string) => number;
  divide: (firstValue: number | string, secondValue: number | string) => number;
}

const calculate: Calculate = {
  add: (firstValue, secondValue) => {
    return currency(firstValue).add(secondValue).value;
  },
  sub: (firstValue, secondValue) => {
    return currency(firstValue).subtract(secondValue).value;
  },
  multiply: (firstValue, secondValue) => {
    return currency(firstValue).multiply(secondValue).value;
  },
  divide: (firstValue, secondValue) => {
    return currency(firstValue).divide(secondValue).value;
  },
};

export default calculate;
