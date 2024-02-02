// numeral import
import numeral from 'numeral';

// *** ---------------------------------------------------------------------- *** //

// 120,516
export function fNumber(number: number): string {
  return numeral(number).format();
}

// $120,516
export function fCurrency(number: number): string {
  const format = number ? numeral(number).format('$0,0.00') : '';

  return result(format, '.00');
}

// 120516%
export function fPercent(number: number): string {
  const format = number ? numeral(Number(number) / 100).format('0.0%') : '';

  return result(format, '.0');
}

// 120.52k
export function fShortenNumber(number: number): string {
  const format = number ? numeral(number).format('0.00a') : '';

  return result(format, '.00');
}

// 120.5 KB
export function fData(number: number): string {
  const format = number ? numeral(number).format('0.0 b') : '';

  return result(format, '.0');
}

export function result(format: string, key = '.00'): string {
  const isInteger = format.includes(key);

  return isInteger ? format.replace(key, '') : format;
}
