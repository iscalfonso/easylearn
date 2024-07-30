export function createRound(method: string): Function {
  // <any>Math to suppress error
  const func: any = (<any>Math)[method];
  return function(value: number, precision: number = 0) {
    if (typeof value === 'string') {
      throw new TypeError('Rounding method needs a number');
    }

    if (typeof precision !== 'number' || isNaN(precision)) {
      precision = 0;
    }

    if (precision) {
      let pair = `${value}e`.split('e');
      const val = func(`${pair[0]}e` + (+pair[1] + precision));

      pair = `${val}e`.split('e');
      return +(pair[0] + 'e' + (+pair[1] - precision));
    }

    return func(value);
  };
}

export function toDecimal(value: number, decimal: number): number {
  return Math.round(value * Math.pow(10, decimal)) / Math.pow(10, decimal);
}


