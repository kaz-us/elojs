function MultiplicatorUnitFailure() {}

MultiplicatorUnitFailure.prototype = Object.create(Error.prototype);
MultiplicatorUnitFailure.prototype.name = "MultiplicatorUnitFailure";

function primitiveMultiply(a, b) {
  let rand = Math.random();
  if (rand < 0.5)
        return a * b;
  else
    throw new MultiplicatorUnitFailure();
}

function reliableMultiply(a, b) {
  // Ваш код
  for (;;) {
    try {
      return primitiveMultiply(a, b);
    }
    catch (err) {
      if (err instanceof MultiplicatorUnitFailure)
      console.log ('Не в этот раз! Попробуй ещё раз.');

   // else
     // throw err;
    }
  }

}
console.log(reliableMultiply(8, 8));
// → 64