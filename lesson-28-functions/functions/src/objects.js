const currecyEuro = {
    values: {
        usd: 1.16,
        pound: 0.65,
      },
      convert(sum, currency) {
        const multiplier = this.values[currency];
        if(!multiplier)  throw new Error("Invalid currency");
        return sum * multiplier;
      },
      get actualCurrency() {
        return Object.keys(this.values);
      },
      addCurrency(name, multiplier) {
        this.values[name] = multiplier;
      }
}

const sum = 1000;

const sumInUsd = currecyEuro.convert(sum, "usd");
console.log(sumInUsd);
console.log(currecyEuro.actualCurrency);
currecyEuro.addCurrency("uah", 48);
console.log(currecyEuro.actualCurrency);
console.log(currecyEuro.convert(1000, "uah"))
