'use stritc'
export { };

// Given base and n that are both 1 or more, compute recursively (no loops)
// the value of base to the n power, so powerN(3, 2) is 9 (3 squared).



function baseAndN(base: number, powerN: number): number {
  if (powerN < 1) {
    return 1
  } else {
    return base * (baseAndN(base, powerN - 1));
  }
}
console.log(baseAndN(3, 3));